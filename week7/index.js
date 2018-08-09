'use strict'
var Snack = require("./models/Snack");
var snackMethods = require("./snackMethods");
const express = require("express");
const app = express();
var exphbs  = require('express-handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); 
app.use(require("body-parser").urlencoded({extended: true})); 

app.engine(".html", exphbs({extname: '.html'}));
app.set("view engine", ".html");

//home
app.get('/', (req, res, next) => {
  Snack.find({}, function (err, items) {
    if (err) return next(err);
    res.render('home', {snacks: JSON.stringify(items) }); 
  });
});

app.get('/api/snacks/:name', (req, res, next) => {
  Snack.findOne({name:req.params.name}, (err, snack) => {
    if (err) return next(err);
    console.log(snack);
    res.json(snack);
  });
});

app.get('/save', (req, res, next) => {
  Snack.updateOne({_id: req.body._id}, {name:req.body.name, price: req.body.price, brand: req.body.brand }, (err, result) => {
    if (err) return next(err);
    console.log(result);
    res.json({result: result }); 
  });
});

app.get('/delete', (req, res, next) => {
  Snack.remove({name:req.query.name}, (err, snack) => {
    if (err) return next(err);
    console.log(snack);
    res.render({result: snack }); 
  });
});

app.get('/api/snacks', (req, res, next) => {
  Snack.find({}, function (err, items) {
    if (err) return next(err);
    res.json(items); 
  });
});

// 404 
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started');    
});


/*
//detail
app.get('/detail', (req, res, next) => {
  Snack.findOne({name:req.query.name}, (err, snack) => {
    if (err) return next(err);
    console.log(snack);
    res.render('detail', {result: snack }); 
  });
});

//post
app.post('/detail', (req, res, next) => {
  Snack.findOne({name:req.body.name}, (err, snack) => {
    if (err) return next(err);
    console.log(snack);
    res.render('detail', {result: snack.getAll()}); 
  });
});
*/
