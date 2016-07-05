/*
* HTTP Server Example without Response End
* */
const http = require('http');
const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.write('Hello World');
});

// Timeout : 10s. Default 2min
server.setTimeout(10 * 1000);

server.listen(3000);