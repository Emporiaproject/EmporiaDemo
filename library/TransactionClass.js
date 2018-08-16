'use strict';

class TransactionClass extends FilepathClass {
	constructor(fromAddress, toAddress, amount) {
		super();
		// console.log("TransactionClass is loading...")
		this.fromAddress = fromAddress;
		this.toAddress = toAddress;
		this.amount = amount;
		this.fee = 0.000003;
		this.begin = Date.now();
		this.end = Date.now();
		this.script = [];
	}

	outputdata() {
		return {
			"fromAddress":this.fromAddress,
			"toAddress":this.toAddress,
			"amount":this.amount,
			"begin":this.begin,
			"end":this.end,
			"script":this.script
		}
	}
	
	UTXO(fromAddressList,ToAddressList,amount){
		
	}
}

module.exports = TransactionClass;
// example code:
/*

var TransactionClass = require('../library/TransactionClass');
var Transaction = new TransactionClass();

*/