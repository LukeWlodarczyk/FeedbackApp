const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleCLientSecret,
			callbackURL: '/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = await User.findOne({ googleId: profile.id });

			if (user) {
				return done(null, user);
			}

			const newUser = await new User({ googleId: profile.id }).save();
			done(null, newUser);
		}
	)
);
