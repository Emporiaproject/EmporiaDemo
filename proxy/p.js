var udp       = require('dgram').createSocket('udp4')

var send = function(message, port, host) {
	console.log('send')
	console.log(arguments)
	console.log(Buffer.from(message))
	udp.send(Buffer.from(message), port, host)
}


send('echo1', 3003, "10.0.0.8")
send('echo2', 3003, "10.0.0.8")