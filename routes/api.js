const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  res.send({type:'GET'})
})

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  console.log(req.body);
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
  // var ninja = new Ninja(req.body);
  // ninja.save();
  
})

// edit ninjas
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    }).catch(next);
  }).catch(next);
})

// delete ninjas
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndDelete({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  }).catch(next);
})

// exporting
module.exports = router