const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose
	.connect(keys.mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

const app = express();

app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5001;

app.listen(port);
