var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' },
  device: { name: 'servo', driver: 'servo', pin: 10 },

  work: function(my) {
    var angle = 45 ;
    my.servo.angle(angle);
    every((1).second(), function() {
      angle = angle + 45 ;
      if (angle > 135) {
        angle = 45
      }
      my.servo.angle(angle);
    });
  }
}).start();
