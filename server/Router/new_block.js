'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');

router.all('/', (req, res) => {
	res.json({"method":"all"});
});

router.post('/post', (req, res) => {
	res.json({"method":"post"});
});

router.get('/get', (req, res) => {
	res.json({"method":"get"});
});

module.exports = router;
// example code:
/*

var new_block = require('./Router/new_block');
app.use('/new_block',new_block);

*/