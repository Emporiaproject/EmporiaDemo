const WebSocket = require('ws');

var readline = require('readline');

class testclass {
	constructor(serverport) {
		var that = this;
		that.initws(serverport);
	}

	initws(serverport){
		var that = this;

		this.ws = new WebSocket('ws://localhost:'+serverport)
		this.ws.onopen = function () {
			// console.log("onopen");
			that.send("helloFromClient","123");
		};
		this.ws.onmessage = function (message) {
			that.wsrouting(JSON.parse(message.data));
			rl.prompt();
		}
		this.onclose();
	}

	onclose(){
		var that = this;
		this.ws.onclose = function (message) {
			that.initws();
		}
	}
	
	send(action,body){
		var that = this;
		that.ws.send(JSON.stringify({who:"client",action:action,body:body}));
	}

	wsrouting(request){
		var that = this;
		switch(request.action){
			case "string":
			console.log(request.body)
			break;
			case "array":
			for(var i = 0,len = request.body.length;i<len;i++){
				console.log(i+1)
				console.log(request.body[i])
			}
			break;
			default:
		}
		rl.prompt();
	}
}

var ttt = new testclass(3001);

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
	prompt: 'emporia terminal > '
});
rl.on('pause', () => {
  console.log('Readline pause');
});
rl.on('resume', () => {
  console.log('Readline resume');
});
rl.prompt();
rl.on('line', function(line){
    switch(line.trim().split(" ")[0]) {
        case 'link':
			ttt = new testclass(3001);
		break;
        case 'myaddress':
			ttt.send("myaddress","test")
		break;
        case 'blockchain':
			ttt.send("blockchain","test")
		break;
		case "transactions":
			ttt.send("transactions",[line.trim().split(" ")[1],parseFloat(line.trim().split(" ")[2])])
		break;
        case 'balance':
			ttt.send("balance","test")
            break;
        case 'miner':
			ttt.send("miner","test")
            break;
        case 'pendingTransactions':
			ttt.send("pendingTransactions","test")
            break;
        case 'sign':
			ttt.send("sign","test")
            break;
        case 'help':
			ttt.send("help","test")
            break;
        case 'close':
            rl.close();
            break;
        default:
			console.log('没有找到命令！');
            break;
    }
	rl.prompt();
}).on('close', function() {
	rl.write("bye bye");
    process.exit(0);
});