'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
var CryptoUtilClass = require('../../library/CryptoUtilClass');
var FilepathClass = require('../../library/FilepathClass');

var CryptoUtil = new CryptoUtilClass();

router.all('/', (req, res) => {
	res.json({"method":"all"});
});

router.post('/post', (req, res) => {
	res.json({"method":"post"});
});

router.get('/get', (req, res) => {
	res.json({"method":"get"});
});

router.get('/userList', (req, res) => {
	res.json(global.userlist);
});

router.get('/newuser', (req, res) => {
	var username = "user"+(global.userlist.length+1)
	CryptoUtil.generateKeyPair(username)
	let newuser = {
		"name":"user"+(global.userlist.length+1),
		"port":3001+(3*(global.userlist.length)),
		"devport":9230+(3*(global.userlist.length)),
		"cellmaster":"server/index.js",
		"proxy":"proxy/proxy.js",
		"p2pserver":"proxy/p2pserver.js"
	}
	global.setUser(newuser)
	global.spawn(global.processList.length-3)
	global.spawn(global.processList.length-2)
	global.spawn(global.processList.length-1)
	global.userlist.push(newuser)
	res.json({"action":"NewUserAdd","publickey":CryptoUtil.publicDer,"privatekey":CryptoUtil.privateDer});
});

router.get('/updatauserconfig', (req, res) => {
	var Filepath = new FilepathClass();
	Filepath.writeconfig("user",{"user":global.userlist})
	res.json(global.userlist);
});

module.exports = router;
// example code:
/*

var hello = require('./Router/hello');
app.use('/hello',hello);

*/