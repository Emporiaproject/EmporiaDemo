'use strict';

var FilepathClass = require('./FilepathClass');
var CryptoUtilClass = require('./CryptoUtilClass');

class UTXOClass extends FilepathClass {
	constructor() {
		super();
		this.In = [{
			prev:"",
			index:0,
			script:""
		}];
		this.Out = [{
			value:0,
			script:""
		}];
		this.TransactionTable = {
			"In":{
				prev:"",
				index:0,
				script:""
			},
			"Out":{
				value:0,
				script:""
			}
		}
	}
	
}

module.exports = UTXOClass;
// example code:
/*

var UTXOClass = require('../library/UTXOClass');
var UTXO = new UTXOClass();

*/