const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const store = require('./store');
const PORT = 8080;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.post('/createUser', (req, res) => {
  store.createUser({
    username: req.body.username,
    password: req.body.password
  })
    .then(() => res.sendStatus(200))
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));