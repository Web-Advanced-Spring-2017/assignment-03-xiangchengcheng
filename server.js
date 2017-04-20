
var express = require('express')

var app = express()

var server = app.listen(3000)

app.use(express.static('public'))
//use express to save time

console.log("socket server is running!")
//test out

var socket = require('socket.io')
//link socket.io

var io = socket(server)
//create variable

io.sockets.on('connection', newConnection)
//event

function newConnection(socket){
	console.log('new connection:' + socket.id)


	socket.on('mouse', mouseMsg)

	function mouseMsg(data){
		socket.broadcast.emit('mouse', data)
		console.log(data)
	}




}