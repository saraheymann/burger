// import express
// burger.js
// create router for the app and export the router at the end

var express = require('express');
var models = require('../models/burger.js');
var router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) {
  models.selectAll(function(data) {
    var hbsObject = { 
        burgers: data 
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
  models.insertOne(req.body.burger_name);
    res.redirect('/index');
});


// Devour a Burger
router.post('/:id', function (req, res) {
  models.updateOne(req.params.id);
    // , function() {
    res.redirect('/index');
//   });
});



// Export routes
module.exports = router;