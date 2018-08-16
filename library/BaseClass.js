'use strict';


class BaseClass {
	constructor() {
		// console.log("BaseClassClass is loading...")
		this.udp = require('dgram').createSocket('udp4')
		this.udpRoutingList = [];
	}

	udpinit(port,message,error,listening){
		
		this.udp.on('message', function(data, ipdr) {
			// console.log('recever message:',JSON.parse(data.toString()),ipdr)
			if(typeof message === "function"){
				message(JSON.parse(data.toString()),ipdr)
			}
		})

		this.udp.on('error', function(err) {
			console.log('error')
			console.log(arguments)
			if(typeof error === "function"){
				error(arguments)
			}
		})

		this.udp.on('listening', function(err) {
			console.log('listening')
			if(typeof listening === "function"){
				listening(arguments)
			}
		})
		
		this.udp.bind(port)
	}

	send(message, port, host) {
		// console.log('send arguments:',arguments)
		// console.log("Buffer.from(message):",Buffer.from(message))
		this.udp.send(Buffer.from(message), port, host)
	}
	
}

module.exports = BaseClass;
// example code:
/*

var BaseClass = require('../library/BaseClass');
var Base = new BaseClass();

*/