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
    res.render('home', {snacks: items }); 
  });
});

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

// 404 
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started');    
});