// Get basic modules for an Express application
var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Get custom defined routes
var api_routes = require('./api/routes');

// Define a specific listen port
app.set('port', 3000);

// * Middleware: Log every incoming request (can limit to a subset of paths)
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

// * Middleware: Specify a pool of static resources to be served when visiting certain path
app.use('/', express.static(path.join(__dirname, 'public')));

// ! Make sure middleware used (bodyParser) in below api route is executed
app.use(bodyParser.urlencoded({extended: false}));

// * Middleware: Assign a subset of paths to follow a set of custom defined routes
app.use('/api', api_routes);

// Start the server by asking it to listen to request
var server = app.listen(app.get('port'), function() { // refers to port ASSIGNED TO server
    var port = server.address().port;
    console.log('Magic happens on port ' + port); // refers to the port server ACTUALLY uses
});