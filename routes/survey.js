const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

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
});

module.exports = router;
