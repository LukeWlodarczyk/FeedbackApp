const express = require('express');
require('./services/passport');

const app = express();

app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5001;

app.listen(port);
