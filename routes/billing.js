const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/api/stripe', requireLogin, async (req, res) => {
	const charge = await stripe.charges.create({
		amount: 500,
		currency: 'usd',
		description: '$5 for 5 credits',
		source: req.body.id,
	});

	if (!charge.paid) {
		return res.status(400).json({ error: 'Payment was not finalized!' });
	}

	req.user.credits += 5;
	const user = await req.user.save();

	res.json(user);
});

module.exports = router;
