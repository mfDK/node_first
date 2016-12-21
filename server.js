// BASE SETUP
// ===========

// call the packages we need
var express = require('express');			// call express
	app = express();						// define our app using express
	bodyParser = require('body-parser');

// configure app to user bodyParser();
// this will let us get the data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 		// this is setting out localhost port

// ROUTES FOR OUR API
// ==================
var router = express.Router();				// get an instance of the express Router

// test route to make sure everything is wroking(accessed at GET http://localhost:8080)
router.get('/', function(req, res) {
	res.json({ message: "hooray! welcome to the api!" });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ================
app.listen(port); // localhost:8080
console.log("magic happens on " + port);