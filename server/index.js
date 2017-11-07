const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Name = require('../db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/name', (req, res) => {
  let name = new Name({
    name: req.body.name,
    sex: req.body.sex,
    votes: 0,
    vetoed: false,
  });
  name.save((err, name) => {
    console.log('***************names saved');
    if (err) {
      console.log('err in post: ', err);
    } else {
      res.send(JSON.stringify('Successful Post'));
    }
  });
});

app.get('/names', (req, res) => {
  Name.find((err, names) => {
    if (err) {
      console.log( 'server get request failure', err);
    } else {
      console.log('Success!');
    }
    res.end(JSON.stringify(names));
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`MERN Starter listening on ${port}`);
});