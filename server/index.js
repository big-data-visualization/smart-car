var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ip;
var five = require("johnny-five");
var board = new five.Board();


var keypress = require("keypress")


app.get('/', function(req, res){
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static(path.join(__dirname, 'public')));


var usonic     = require('r-pi-usonic')
var statistics = require('math-statistics');
var sensor = usonic.sensor(14, 15, 750);

    var distances;

    (function measure() {
	return;
        if (!distances || distances.length === 5) {
            if (distances) {

		var distance = statistics.median(distances);
                console.log(distance.toFixed(2) + "cm");
            }

            distances = [];
        }

        setTimeout(function () {
            distances.push(sensor());

            measure();
        }, 60);
    }());




var ready = false;

board.on("ready", function() {

var speed, commands, motors;

  speed = 100;
  commands = null;
  motors = {
    a: new five.Motor([3, 4]),
    b: new five.Motor([6, 7])
  };

  this.repl.inject({
    motors: motors
  });

  function controller(ch, key) {
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
  }


  keypress(process.stdin);

  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
//////////////////////////





	console.log("ready");
	if(ready) return;
	ready = true;

	var led = new five.Led({
    		pin: 13
  	});

	led.on();


    	this.repl.inject({
		led: led
    	});

	io.on('connection', function(socket){

		console.log('connection');

    		//socket.emit('step', servo.value);

    		socket.on('step', function(msg){
      			console.log(111, msg, servo.value);
      			//servo.to(msg);
			//servo.stop();
    		});

		socket.on('switch', function(msg) {
			if(msg == 1) {
				led.on()
			}
			else {
				led.off()
			}
		});




		(function measure() {
        if (!distances || distances.length === 5) {
            if (distances) {

                var distance = statistics.median(distances);
                //console.log(distance.toFixed(2) + "cm");
		socket.emit('distance', distance.toFixed(2))
            }

            distances = [];
        }

        setTimeout(function () {
            distances.push(sensor());

            measure();
        }, 500);
    }());




	
	});
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
