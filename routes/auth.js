const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
		prompt: 'select_account',
	})
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google'),
	(req, res) => {
		res.redirect('/surveys');
	}
);

router.get('/api/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
	res.json(req.user);
});

module.exports = router;
