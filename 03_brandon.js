var net = require("net");
//console.log("net", net);

var server = net.createServer(respond);

function respond(socket){
	d = new Date();
	socket.end(d.toString());
}

var port = process.argv[2];
console.log ("Listening on Port",port);
server.listen(port)