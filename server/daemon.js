var os = require('os');
const express = require('express');
const app = express();
var router = express.Router();

var hello = require('./Router/hello');
app.use('/', express.static('./server/public'));
app.use('/hello',hello);

global.userlist = [];

app.listen(
	88,
	() => console.log('Example app listening on port 88!')
)

var child_process = require('child_process');
var FilepathClass = require('../library/FilepathClass');

function getProcessInfo(){
	const memUsage = process.memoryUsage();//内存使用
	const cpuUsage = process.cpuUsage();//cpu使用
	const cfg = process.config;//编译node.js的配置信息
	const env = process.env;//用户环境
	const pwd = process.cwd();//工作目录
	const execPath = process.execPath;//node.exe目录
	const pf = process.platform;//运行nodejs的操作系统平台
	const release = process.release;//nodejs发行版本
	const pid = process.pid;//nodejs进程号
	const arch = process.arch;//运行nodejs的操作系统架构
	const uptime = process.uptime();//nodejs进程运行时间
	return {
		memUsage,cpuUsage,cfg,env,pwd,execPath,pf,release,pid,arch,uptime
	}
}

var Filepath = new FilepathClass();

global.processList = [];

global.userlist = Filepath.readconfig("user").user;


global.setUser = function(UserConfig){

	// 端口的起始地址
	var portcount = UserConfig.port;
	var name = UserConfig.name;
	// 调试端口的起始地址
	var devportcount = UserConfig.devport;

	global.processList.push({
		name:name,
		port:portcount,
		devport:devportcount,
		file:UserConfig.cellmaster,
		wsport:UserConfig.port,
		workerHandle:null
	});
	portcount++;
	devportcount++;

	global.processList.push({
		name:name,
		port:portcount,
		devport:devportcount,
		file:UserConfig.proxy,
		wsport:UserConfig.port,
		workerHandle:null
	});
	portcount++;
	devportcount++;

	global.processList.push({
		name:name,
		port:portcount,
		devport:devportcount,
		file:UserConfig.p2pserver,
		wsport:UserConfig.port,
		workerHandle:null
	});
	portcount++;
	devportcount++;
}


global.spawn = function (point) {
	console.log(point)
	console.log(global.processList[point])
	global.processList[point].workerHandle = child_process.spawn(
		'node',
		[
			"--inspect="+global.processList[point].devport,
			global.processList[point].file,
			"port="+global.processList[point].port,
			"wsport="+global.processList[point].wsport,
			"name="+global.processList[point].name
		]
	)
	console.log(global.processList[point].file,
		"on port",
		global.processList[point].port,
		"dev port ",
		global.processList[point].devport)


	global.processList[point].workerHandle.stdout.on('data', (data) => {
		console.log(new Buffer(data).toString('utf-8'));
	});

	global.processList[point].workerHandle.stderr.on('data', (data) => {
		console.log(new Buffer(data).toString('utf-8'));
	});

	global.processList[point].workerHandle.on('exit', function (code) {
		if (code !== 0) {
			global.spawn(point);
		}
	});
}


for (var usercount = 0,len = global.userlist.length;usercount<len;usercount++){
	// console.log(global.userlist[usercount]);
	global.setUser(global.userlist[usercount]);
}

for (point in global.processList){
	global.spawn(point);
}
