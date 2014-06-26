var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var api = {};

// API Factory
api.session = require('./api/session');
api.extension = require('./api/extension');

// Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// Router resister
api.session(server);
api.extension(server);


module.exports = server;