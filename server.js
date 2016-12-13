// ---------------- Required Modules ---------------- >>
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// ---------------- Varibles ---------------- >>
var app = express();
var port = process.env.PORT || 9900;


// ---------------- Static Files served at /public ---------------- >>
app.use('/', express.static(path.join(__dirname, 'public')));

// ---------------- Serving Favicon ---------------- >>
app.use(favicon(__dirname + '/public/images/fav.png'));

// ---------------- Log HTTP Requests ---------------- >>
app.use(morgan('dev'));


// ---------------- Log Server & Port Details ---------------- >>
console.log('All good !');
console.log('Server running at ' + port);

// ---------------- Start Server ---------------- >>
server.listen(port);