const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/api/logout', (req, res) => {
	req.logout();
	res.json(req.user);
});

router.get('/api/current_user', (req, res) => {
	res.json(req.user);
});

module.exports = router;
