var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' },

  device: { name: 'servo', driver: 'continuous-servo', pin: 2 },

  work: function(my) {
    var clockwise = true;

    my.servo.clockwise();

    every((1).second(), function() {
      if (clockwise) {
        my.servo.counterClockwise();
        clockwise = false;
      } else {
        my.servo.clockwise();
        clockwise = true;
      }
    });
  }
}).start();
