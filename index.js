// setup express server
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose'); 

// set up express app
const app = express();

// connect to mongodb, db ninjago it crate automatically if it does not exist
mongoose.connect('mongodb://127.0.0.1:27017/ninjago');
mongoose.Promise = global.Promise;

// parse body data info json order is important bodyparser object always come above routes
app.use(bodyParser.json());

// use routes file
app.use('/api', routes);

// error handling by middleware
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err.message});
})
// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('listening request at 4000')
})