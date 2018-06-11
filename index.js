const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose
	.connect(keys.mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

const app = express();

app.use(express.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/auth'));
app.use('/', require('./routes/billing'));

const port = process.env.PORT || 5001;

app.listen(port);
