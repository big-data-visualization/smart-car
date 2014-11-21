var five = require('johnny-five')
var board = new five.Board()
var conf = require('../config')('hardware')
module.exports = board