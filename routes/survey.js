const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const surveyTemplate = require('../services/emailTemplates/survey');

const Survey = mongoose.model('surveys');

router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
	try {
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
		mailer.send();
	} catch (e) {
		res.status(400).send({ error: e });
	}
});

module.exports = router;
