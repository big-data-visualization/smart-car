/**
 * Hardware Framework
 * @author G.Freeman
 */
'use strict'

var koa = require('koa')
var app = koa()

// Config
var conf = global.conf = require('./config')('server')

// Middlewire: logger
// var logger = require('koa-logger')
// app.use(logger())

// Middlewire: session
var session = require('koa-session')
app.keys = conf.appKey || ['some secret hurr']
app.use(session())
app.use(function *(next){
  // Share session to socket
  global.session = this.session
  yield next
})

// DB
var monk = require('monk')

// Share DB connection
var db = global.db = monk(conf.mongo)

// Main
require('./routes/index')(app)

var server = require('http').Server(app.callback())
var socket = require('socket.io')
var monitor = require('monitor.io')
var io = socket(server)
io.use(monitor({port: conf.monitorPort}))
var network = require('./routes/network')
var board = require('./models/board')

// board -> network
board.on('ready', function() {
  // When board on ready, share the status.
  global.board = board
  network(io)
})

//network(io)

server.listen(conf.port, function() {
    /*console.log("web server: listening on", conf.port)*/
})



