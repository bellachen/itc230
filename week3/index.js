'use strict'
var snacks = require("./lib/snacks.js");
const express = require("express");
const app = express();
var exphbs  = require('express-handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); 
app.use(require("body-parser").urlencoded({extended: true})); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// home
app.get('/', (req, res) => {
    res.render('home', {
        snacks: snacks.getAll()
    }); 
});

// from home POST to find
app.post('/find', function(req,res){
    console.log(req.body)
    var search = snacks.get(req.body.name);
    res.render("find", {
        name: req.body.name, result: search, snacks: snacks.getAll()
    });
});

// find
app.get('/find', function(req,res){
    console.log(req.query)
    var search = snacks.get(req.query.name);
    res.send('find', {
        name: req.query.name, 
        result: search
        });
});

// delete
app.get('/delete', function(req,res){
    var search = snacks.delete(req.query.name);
    res.render('delete', {
        name: req.query.snack, 
        result: search
    });
});

// about
app.get('/about', (req, res) => {
 res.type('text/plain');
 res.sendFile(__dirname + '/views/about.html');
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