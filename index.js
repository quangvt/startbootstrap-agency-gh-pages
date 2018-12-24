const express = require('express');

const app = express();

app.use(express.static('./'));

app.get('/test', (req, res) => {
  return res.send('Hello, I am a webserver');
});

app.listen(80);
