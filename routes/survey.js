const express = require('express');
const router = express.Router();
const passport = require('passport');
const Path = require('path-parser').default;
const { URL } = require('url');
const _ = require('lodash');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const surveyTemplate = require('../services/emailTemplates/survey');

const Survey = mongoose.model('surveys');

router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
	const { title, subject, body, recipients } = req.body;

	const survey = new Survey({
		title,
		subject,
		body,
		recipients: recipients.split(',').map(email => ({ email: email.trim() })),
		_user: req.user.id,
		dateSent: Date.now(),
	});

	const mailer = new Mailer(survey, surveyTemplate(survey));

	try {
		await mailer.send();
		await survey.save();
		req.user.credits -= 1;
		const user = await req.user.save();

		res.send(user);
	} catch (err) {
		res.status(422).send(err);
	}
});

router.post('/api/surveys/webhooks', (req, res) => {
	const p = new Path('/api/surveys/:surveyId/:choice');
	console.log(p);

	_.chain(req.body)
		.map(({ email, url }) => {
			const match = p.test(new URL(url).pathname);
			if (match) {
				return { email, surveyId: match.surveyId, choice: match.choice };
			}
		})
		.compact()
		.uniqBy('email', 'surveyId')
		.each(({ surveyId, email, choice }) => {
			Survey.updateOne(
				{
					_id: surveyId,
					recipients: {
						$elemMatch: { email: email, responded: false },
					},
				},
				{
					$inc: { [choice]: 1 },
					$set: { 'recipients.$.responded': true },
					lastResponded: new Date(),
				}
			).exec();
		})
		.value();
	console.log('done');

	res.send({});
});

module.exports = router;
