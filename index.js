const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
  return res.send('Hello, I am a webserver');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
