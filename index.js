const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({hello: 'world'});
})

const PORT = process.env.PORT || 5001;

app.listen(PORT);
