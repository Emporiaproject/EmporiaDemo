var http = require('http');
var net = require('net');
var url = require('url');

var processArgvRouterClass = require('../library/processArgvRouterClass');
var processArgvRouter = new processArgvRouterClass();

function request(cReq, cRes) {
	var u = url.parse(cReq.url);
	console.log(u)

	var options = {
		hostname : u.hostname, 
		port     : u.port || 80,
		path     : u.path,       
		method     : cReq.method,
		headers     : cReq.headers
	};

	var pReq = http.request(options, function(pRes) {
		cRes.writeHead(pRes.statusCode, pRes.headers);
		pRes.pipe(cRes);
	}).on('error', function(e) {
		cRes.end();
	});

	cReq.pipe(pReq);
}

function connect(cReq, cSock) {
	var u = url.parse('http://' + cReq.url);
	console.log(u)
	var pSock = net.connect(u.port, u.hostname, function() {
		cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
		pSock.pipe(cSock);
	}).on('error', function(e) {
		cSock.end();
	});

	cSock.pipe(pSock);
}

http.createServer()
	.on('request', request)
	.on('connect', connect)
	.listen(processArgvRouter.data.port, '0.0.0.0');
console.log("proxy run on:",processArgvRouter.data.port)