var five = require('johnny-five')
var conf = require('../config')('hardware')

var servo = new five.Servo(conf.servo.pins)

  // Sweep from 0-180 and repeat.
  // servo.sweep();

module.exports = servo