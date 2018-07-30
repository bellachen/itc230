// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database
var Snack = require("./models/Snack");

// port
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// =============================================================================
// on routes that end in /snacks
router.route('/snacks')

    // get all the snacks (accessed at GET http://localhost:8080/api/snacks)
    .get(function(req, res) {
        Snack.find(function(err, snacks) {
            if (err)
                res.send(err);

            res.json(snacks);
        });
    });
    
    // add a snack (accessed at POST http://localhost:8080/api/snacks)
    .post(function(req, res) {

        var snack = new Snack();      // create a new instance of the Snack model
        snack.name = req.body.name;  // set the snacks name (comes from the request)

        // save the snack and check for errors
        snack.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Snack created!' });
        });

    });
    
// on routes that end in /snacks/:name
// ----------------------------------------------------
router.route('/snacks/:name')

    // get the snack with that id (accessed at GET http://localhost:8080/api/snacks/:name)
    .get(function(req, res) {
        Snack.findById(req.params.name, function(err, snack) {
            if (err)
                res.send(err);
            res.json(snack);
        });
    });
    
    // delete the snack with this id (accessed at DELETE http://localhost:8080/api/bears/:name)
    .delete(function(req, res) {
        Snack.remove({
            _id: req.params.name
        }, function(err, snack) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
