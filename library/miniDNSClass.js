'use strict';

var dgram     = require('dgram')
var udp       = dgram.createSocket('udp4')
const WebSocket = require('ws');

var FilepathClass = require('./FilepathClass');
var CryptoUtilClass = require('./CryptoUtilClass');
var processArgvRouterClass = require('../library/processArgvRouterClass');

var processArgvRouter = new processArgvRouterClass();

class miniDNSClass extends FilepathClass {
	constructor(serverport) {
		super();
		var that = this;
		this.nodelist = [];

		that.initws();
		this.udpinit(serverport,(data,ipdr)=>{
			// console.log(data)
			// console.log(ipdr)
			that.routing(data,ipdr)
		})
	}

	initws(){
		var that = this;

		this.ws = new WebSocket('ws://localhost:'+processArgvRouter.data.wsport)
		this.ws.onopen = function () {
			that.ws.send(JSON.stringify({who:"p2pserver",action:"helloFromP2PServer",body:""}));
		};
		this.ws.onmessage = function (message) {
			that.wsrouting(JSON.parse(message.data));
		}
		this.onclose();
	}

	onclose(){
		var that = this;
		this.ws.onclose = function (message) {
			that.initws();
		}
	}
	
	wsrouting(request){
		var that = this;
		switch(request.action){
			case "doGetNodeList":
			let nodelist = this.readconfig("NNS").node
				this.send(
					JSON.stringify({
						"head":"GetNodeList",
						"publicDer":request.publicDer,
						"who":processArgvRouter.data.name
					}),
					nodelist[0].port,
					nodelist[0].ip)
			break;
			case "doSendMsgToNode":
				// console.log("from:")
				// console.log(request.from)
				// console.log("to:")
				// console.log(request.to)
				this.send(
					JSON.stringify({
						"head":request.body.action,
						"msg":request.body.msg
					}),
					request.to.port,
					request.to.address
				);
			break;
			default:
		}
	}
	
	broadcast(info){
		for(var i = 0,len = this.nodelist.length; i<len; i++){
			this.send(JSON.stringify(info),
				this.nodelist[i].port,
				this.nodelist[i].address
			)
		}
	}

	routing(request,ipdr){
		var that = this;
		switch(request.head){
			case "GetNodeList":
				this.nodelist.push({
					who: request.who,
					publicDer: request.publicDer,
					address: ipdr.address,
					family: ipdr.family,
					port: ipdr.port
				})
				that.broadcast({
					"head":"TheNodeList",
					"nodelist":this.nodelist
				})
			break;
			case "TheNodeList":
				that.ws.send(JSON.stringify({who:"p2pserver",action:"nodelist",body:request.nodelist}));
			break;
			case "newblock":
				console.log(request)
				that.ws.send(JSON.stringify({who:"p2pserver",action:"newblock",body:request.msg}));
			break;
			case "newTransaction":
				console.log(request)
				that.ws.send(JSON.stringify({who:"p2pserver",action:"newTransaction",body:request.msg}));
			break;
			default:
		}
	}

}

module.exports = miniDNSClass;
// example code:
/*

var miniDNSClass = require('../library/miniDNSClass');
var miniDNS = new miniDNSClass();

*/