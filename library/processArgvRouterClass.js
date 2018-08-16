'use strict';

var FilepathClass = require('./FilepathClass');
var CryptoUtilClass = require('./CryptoUtilClass');

class processArgvRouterClass extends FilepathClass {
	constructor() {
		super();
		// console.log("processArgvRouterClass is loading...")
		// console.log(process.argv.slice(2))
		this.data = {}
		this.getArgv()
	}
	
	getArgv(){
		for(var count = 0,len=process.argv.slice(2).length;count<len;count++){
			let ttt = process.argv.slice(2)[count].split("=");
			this.data[ttt[0]] = ttt[1];
		}
		// console.log(this.data);
	}
}

module.exports = processArgvRouterClass;
// example code:
/*

var processArgvRouterClass = require('../library/processArgvRouterClass');
var processArgvRouter = new processArgvRouterClass();

*/