'use strict';

var CryptoUtilClass = require('./CryptoUtilClass');
var UTXOClass = require('./UTXOClass');

class BlockClass {
	constructor(timestamp, transactions, previousHash = '') {
		this.previousHash = previousHash;
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	// 计算出哈希值
	calculateHash(){
		return (new CryptoUtilClass).SHA256(
			this.previousHash +
			this.timestamp +
			JSON.stringify(this.data) +
			this.nonce
			).toString();
	}
	
	// 挖矿代码
	mineBlock(difficulty) {
		while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
			this.nonce++;
			this.hash = this.calculateHash();
		}
		console.log("BLOCK MINED: " + this.hash);
	}
	
	outputdata(){
		return {
			"previousHash" : this.previousHash,
			"timestamp" : this.timestamp,
			"transactions" : this.transactions,
			"hash" : this.hash,
			"nonce" : this.nonce
		}
	}

}

module.exports = BlockClass;
// example code:
/*

var BlockClass = require('../library/BlockClass');
var Block = new BlockClass();

*/