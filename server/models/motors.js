var five = require('johnny-five')
var conf = require('../config')('hardware')
var motors = {
  a: new five.Motor(conf.motors.pins['a'])
  , b: new five.Motor(conf.motors.pins['b'])
}
var speed = conf.motors.speed
var commands
var move = function(dir) {
  if(key.name === "space") {
    motors.a.stop()
    motors.b.stop()
  }
  if(key.name === "up") {
    motors.a.rev(speed)
    motors.b.fwd(speed)
  }
  if(key.name === "down") {
    motors.a.fwd(speed)
    motors.b.rev(speed)
  }
  if(key.name === "right") {
    motors.a.fwd(speed * 0.75)
    motors.b.fwd(speed * 0.75)
  }
  if(key.name === "left") {
    motors.a.rev(speed * 0.75)
    motors.b.rev(speed * 0.75)
  }
}

module.exports = function(ch, key) {

  // tranfer keypress interval to speed
  if(key) {
    move(key)
    commands = [].slice.call(arguments)
  }

  else {
    if(ch >= 1 && ch <= 9) {
      speed = five.Fn.scale(ch, 1, 9, 0, 255)
      ctrl.apply(null, commands)
    }
  }
}