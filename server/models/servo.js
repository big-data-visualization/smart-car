var five = require('johnny-five');
var conf = require('../config')('hardware');
var servo = {
    'a':new five.Servo(
        {
            pin:conf.servo.pins || 10,
            /*type: "standard",*/
            /*type: "standard",*/
            type: "standard",
            startAt: 90,       // Immediately move to a degree
            range: [0,180], 
            specs: {           // Is it running at 5V or 3.3V?
                speed: five.Servo.Continuous.speeds["@5V"] 
            }
        }
    ),
    'b':new five.Servo(
        {
            pin:conf.servo.pins || 9,
            /*type: "standard",*/
            type: "standard",
            range: [0,180], 
            startAt: 90,       // Immediately move to a degree
            specs: {           // Is it running at 5V or 3.3V?
                speed: five.Servo.Continuous.speeds["@5V"] 
            }
        }
    )
}
global.board.repl.inject({
    servo:servo
}),

/*servo.a.cw(1);*/
/*servo.b.cw(1);*/

  // Sweep from 0-180 and repeat.
    // servo.sweep();

module.exports = servo;
