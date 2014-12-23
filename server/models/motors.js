var five = require('johnny-five')
var conf = require('../config')('hardware')

var preConfig = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1

var motors = {
  a: new five.Motor(conf.motors.pins['a'] || preConfig.M1)
  , b: new five.Motor(conf.motors.pins['b'] || preConfig.M4)
  , c: new five.Motor(conf.motors.pins['c'] || preConfig.M2)
  , d: new five.Motor(conf.motors.pins['d'] || preConfig.M3)
}

// 1 ~ 9
var scaleSpeed = function(ch) {
  return ch >= 1 && ch <= 9
    ? five.Fn.scale(ch, 1, 9, 0, 255)
    : conf.motors.speed
}

global.board.repl.inject({
   motors: motors,
   led: new five.Led(13)
})

module.exports = {
  'stop': function() {
    console.log('stop')
    motors.a.stop()
    motors.b.stop()
  }
  , 'top': function(ch) {
    console.log('top')
    ch = scaleSpeed(ch)
    motors.a.fwd(ch)
    motors.b.fwd(ch)
  }
  , 'bottom': function(ch) {
    console.log('bottom')
    ch = scaleSpeed(ch)
    motors.a.rev(ch)
    motors.b.rev(ch)
  }
  , 'right': function(ch) {
    console.log('right')
    ch = scaleSpeed(ch)
    motors.a.fwd(ch)
    motors.b.rev(ch)
  }
  , 'left': function(ch) {
    console.log('left')
    ch = scaleSpeed(ch)
    motors.a.rev(ch)
    motors.b.fwd(ch)
  }
}

/*module.exports = motors

global.board.repl.inject({
   motors: motors,
   led: new five.Led(13)
})

var speed = conf.motors.speed
var commands
var move = function(dir) {
  console.log(222, dir)
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


function controller(ch, key) {
  console.log(ch, key)
    if (key) {
      if (key.name === "space") {
        motors.a.stop();
        motors.b.stop();
      }
      if (key.name === "up") {
        motors.a.rev(speed);
        motors.b.fwd(speed);
      }
      if (key.name === "down") {
        motors.a.fwd(speed);
        motors.b.rev(speed);
      }
      if (key.name === "right") {
        motors.a.fwd(speed * 0.75);
        motors.b.fwd(speed * 0.75);
      }
      if (key.name === "left") {
        motors.a.rev(speed * 0.75);
        motors.b.rev(speed * 0.75);
      }

      commands = [].slice.call(arguments);
    } else {
      if (ch >= 1 && ch <= 9) {
        speed = five.Fn.scale(ch, 1, 9, 0, 255);
        controller.apply(null, commands);
      }
    }
  }*/


/*module.exports = function ctrl(ch, key) {

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
}*/
