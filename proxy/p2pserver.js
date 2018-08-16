var dgram     = require('dgram')
var udp       = dgram.createSocket('udp4')

var processArgvRouterClass = require('../library/processArgvRouterClass');
var miniDNSClass = require('../library/miniDNSClass');
var processArgvRouter = new processArgvRouterClass();

var miniDNS = new miniDNSClass(processArgvRouter.data.port);

console.log('udp listening on port '+processArgvRouter.data.port)
