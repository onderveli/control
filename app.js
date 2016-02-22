var express = require('express')
  , http = require('http');

var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server); // this tells socket.io to use our express server

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');//Ana Dizine yönlendir
});

app.get('/b', function(req, res) {
   res.sendfile(__dirname + '/b.html');//Ana Dizine yönlendir
});

// This listens to `send` which is defined in the `test` route
// Upon this action the server emits the message which
// is defined inside the index main route I want stuff displayed   
io.sockets.on('connection', function (socket) {
    socket.on('solOk', function (data) {
		console.log('SagOk');
        io.sockets.emit('SolOk', data);
    });
	socket.on('sagOk', function (data) {
		console.log('SagOk');
        io.sockets.emit('SagOk', data);
    });
});
