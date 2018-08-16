'use strict';

var fs = require('fs');

const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const express = require('express');
const app = express();
var router = express.Router();

var hello = require('./Router/hello');
app.use('/', express.static('./server/public'));

var processArgvRouterClass = require('../library/processArgvRouterClass');
var CryptoUtilClass = require('../library/CryptoUtilClass');
var BlockchainClass = require('../library/BlockchainClass');
var Transaction = require('../library/TransactionClass');
var processArgvRouter = new processArgvRouterClass();

var Blockchain = new BlockchainClass();
var CryptoUtil = new CryptoUtilClass();

var p2pserver = null;
var client = null;

var nodelist = []

var publickey = CryptoUtil.readkey(processArgvRouter.data.name+".publickey.txt")
var privatekey = CryptoUtil.readkey(processArgvRouter.data.name+".privatekey.txt")
// console.log("user add , he`s name:"+processArgvRouter.data.name);
// console.log("user add , he`s address:"+publickey);
// console.log("privateDer is:"+privatekey);


// console.log(Blockchain.chain);
// console.log('Creating some transactions...');
// console.log('user1 to user2: 100 coin');
// console.log((new Transaction(user1, user2, 100)).outputdata());
// Blockchain.createTransaction((new Transaction(user1, user2, 100)).outputdata());
// console.log('user2 to user1 : 50 coin');
// Blockchain.createTransaction((new Transaction(user2, user1, 50)).outputdata());

// console.log('Starting the miner...');
// Blockchain.minePendingTransactions('xaviers-address');

// console.log(Blockchain.chain);
// console.log(Blockchain.getBalanceOfAddress(user1));


app.use('/hello',hello);

let wss = new WebSocketServer({
	server: app.listen(
		processArgvRouter.data.port,
		() => console.log('Example app listening on port '+processArgvRouter.data.port+'!')
	)
});

wss.on('connection', function (ws, req) {
	// const location = url.parse(req.url, true);
	ws.on('message', function (message) {
		let inputmsg = JSON.parse(message)
		switch(inputmsg.who){
			case "p2pserver":
				actionFromP2PServer(
					inputmsg.action,
					inputmsg.body,
					ws)
			break;
			case "client":
				actionFromClient(
					inputmsg.action,
					inputmsg.body,
					ws)
			break;
			default:
		}
	})
	ws.on('close', function () {
		console.log('ws link has close...');
	})
	ws.on('error', function (message) {
		console.log('erro');
	})
});

function actionFromP2PServer(messageaction,messagedata,ws){
	switch(messageaction){
		case "helloFromP2PServer":
			p2pserver = ws;
			ws.send(JSON.stringify({action:"doGetNodeList",publicDer:publickey}));
			break;
		case "nodelist":
			nodelist = messagedata
			// console.log("nodelist "+processArgvRouter.data.name)
			// console.log(nodelist)
			break;
		case "newblock":
			
			break;
		case "newTransaction":
			// console.log(messagedata.fromAddress)
			if(!(messagedata.fromAddress === publickey)){
				Blockchain.createTransaction(messagedata);
			}
			break;
		default:
			console.log("default on ws message:",messagedata)
	}
}

function actionFromClient(messageaction,messagedata,ws){
	console.log("actionFromClient:")
	console.log(messageaction)
	console.log(messagedata)
	switch(messageaction){
		case "helloFromClient":
			client = ws;
			console.log(messageaction,messagedata)
			break;
		case "myaddress":
			ws.send(JSON.stringify({action:"string",body:publickey}));
			break;
		case "blockchain":
			ws.send(JSON.stringify({action:"array",body:Blockchain.chain}));
			break;
		case "balance":
			Blockchain.getBalanceOfAddress(publickey,(balance)=>{
				console.log(balance)
				ws.send(JSON.stringify({
					action:"string",
					body:balance
				}));
			})
			
			break;
		case "miner":
			
			var newblock = Blockchain.minePendingTransactions(publickey)
			console.log(publickey)
			console.log(newblock)
			ws.send(JSON.stringify({
				action:"string",
				body:newblock
				}));
			for(var i =0,len = nodelist.length;i<len;i++){
				SendToOtherNode(p2pserver,nodelist[i],{action:"newblock",msg:newblock})
			}
			break;
		case "transactions":
			for(var i =0,len = nodelist.length;i<len;i++){
				if(nodelist[i].who === messagedata[0]){
					var newTransaction = (new Transaction(
						publickey, nodelist[i].publicDer, messagedata[1]
					)).outputdata();
					console.log(newTransaction);
					ws.send(JSON.stringify({
						action:"string",
						body:newTransaction
						}));

					Blockchain.createTransaction(newTransaction);
					for(var i =0,len = nodelist.length;i<len;i++){
						SendToOtherNode(
							p2pserver,
							nodelist[i],
							{action:"newTransaction",msg:newTransaction})
					}
					break;
				}
			}
			
			break;
		case "pendingTransactions":
			ws.send(JSON.stringify({action:"array",body:Blockchain.pendingTransactions}));
			break;
		case "sign":
			var sign = CryptoUtil.sign("123",CryptoUtil.readkey(processArgvRouter.data.name+".privatekey.txt",true));
			var ddd = CryptoUtil.verifySignature(CryptoUtil.readkey(processArgvRouter.data.name+".publickey.txt",true),sign,"123");
			var output = [];
			output.push(sign)
			output.push(ddd)
			ws.send(JSON.stringify({action:"array",body:output}));
			break;
		case "help":
			console.log(messageaction,messagedata)
			ws.send(JSON.stringify({action:"array",body:["balance","Transaction"]}));
			break;
		default:
			console.log("default on ws message:",messagedata)
			ws.send(JSON.stringify({
				action:"string",
				body:"default"
				}));
	}
}

function SendToOtherNode(ws,to,msg){
	// SendToOtherNode(ws,messagedata[i],{})
	ws.send(JSON.stringify({
		"action":"doSendMsgToNode",
		"from":{
			name:processArgvRouter.data.name,
			publicDer:publickey
		},
		"to":{
			name:to.who,
			publicDer:to.publicDer,
			address:to.address,
			port:to.port
		},
		"body":msg
	}));
}