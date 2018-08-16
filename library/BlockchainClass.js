'use strict';

var FilepathClass = require('./FilepathClass');
var CryptoUtilClass = require('./CryptoUtilClass');
var Block = require('../library/BlockClass');
var Transaction = require('../library/TransactionClass');

class BlockchainClass extends FilepathClass {
	constructor() {
		super();
		// console.log("BlockchainClass is loading...")
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 2;

		// 在区块产生之间存储交易的地方
		this.pendingTransactions = [];

		// 挖矿回报
		this.miningReward = 50;
	}

	createGenesisBlock() {
		let block = new Block(Date.now(), [], "0");
		return block.outputdata();
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	createTransaction(transaction) {
		// newBlock.previousHash = this.getLatestBlock().hash;
		// newBlock.mineBlock(this.difficulty);
		// this.chain.push(newBlock);

		// 推入待处理交易数组
		this.pendingTransactions.push(transaction);
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++){
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}
		return true;
	}

	minePendingTransactions(miningRewardAddress) {
		this.RunContract()
		// 用所有待交易来创建新的区块并且开挖..
		this.pendingTransactions.unshift(
			(new Transaction("Coinbase", miningRewardAddress, this.miningReward)).outputdata()
		);
		let block = new Block(Date.now(), this.pendingTransactions);
		block.mineBlock(this.difficulty);

		// 将新挖的看矿加入到链上
		this.chain.push(block.outputdata());

		// 重置待处理交易列表
		this.pendingTransactions = [];
		return block.outputdata();
	}
	
	RunContract(){
		for(var i = 0,len=this.pendingTransactions.length;i<len;i++){
			console.log(this.pendingTransactions[i].script);
		}
	}

	getBalanceOfAddress(address,cb){
		let balance = 0; // you start at zero!

		// 遍历每个区块以及每个区块内的交易
		for(const block of this.chain){
			for(const trans of block.transactions){

				// 如果地址是发起方 -> 减少余额
				if(trans.fromAddress === address){
					balance -= trans.amount;
				}

				// 如果地址是接收方 -> 增加余额
				if(trans.toAddress === address){
					balance += trans.amount;
				}
			}
		}
		if(typeof cb === "function"){
			cb(balance);
		}
		return balance;
	}
	
	showTheChain(){
		for(var i = 0,len=this.chain.length; i<len;i++){
			// console.log(this.chain[i].transactions)
		}
	}

}

module.exports = BlockchainClass;
// example code:
/*

var BlockchainClass = require('../library/BlockchainClass');
var Blockchain = new BlockchainClass();

*/