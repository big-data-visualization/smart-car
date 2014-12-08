var motors = require('../models/motors');
var shout = require('../models/shout');
//var servo = require('../models/servo');

var audioDir = '/home/t1/smart-car/data/';
var curr = +new Date();

var actionMap = [
	{
		'kw' : ['向前走', '前进'],
		'cb': function(data){
            run(
                function(){motors.top();
                });
		}
	},{
		'kw' : ['你在哪儿'],
		'cb': function(data){
            curr = +new Date();
			run(function(){
                //console.log('----------');
				//servo.sweep();
			});
			
		}
	},{
		'kw' : ['向后走', '后退', '倒车'],
		'cb': function(data){
            console.log(data);
			shout.play({type:'f', content: audioDir + 'back.wav'});
			motors.bottom();
		}
	},{
		'kw' : ['转圈'],
		'cb': function(data){
			shout.play({type:'f', content: audioDir + 'turn.wav'});
			motors.left();
		}
	},{
		'kw' : ['开灯'],
		'cb': function(data){
			shout.play({type:'f', content: audioDir + 'lighton.wav'});
			motors.left();
		}
	},{
		'kw' : ['关灯'],
		'cb': function(data){
			shout.play({type:'f', content: audioDir + 'lightoff.wav'});
			motors.left();
		}
    },{
		'kw' : ['你好'],
		'cb': function(data){
            var tip = [
                '很高兴见到你',
                '技术节玩的高兴'
            ];

			shout.play({type:'t', content: getRandomTip(tip)});
		}
    },{
        'kw' : ['拍照', '照相'],
        'cb': function(data){
            var tip = [
                '请站好',
                '笑一笑',
                '摆个造型呗',
                '3,2,1 茄子',
            ];

                shout.play({type:'t', content: getRandomTip(tip)});
            }
    }
]

function getRandomTip(tips){
    return tips[Math.floor(Math.random() * tips.length)];
}


var curr = +new Date();

function run(func){
    var interval = setInterval(function(){
        func(); 
    }, 100);
    setTimeout(function(){
        clearInterval(interval); 
    }, 2000);
}

function actions(result){
    var isHandled = false;
    actionMap.forEach(function(val, idx){
        var kw = val.kw;
        kw.forEach(function(_val, _idx){
            if(new RegExp(_val).test(result)){
                isHandled = true;
                var cb = val.cb || function(){};
                cb(_val);
            }
        });
    });
    return isHandled;
}

module.exports = {
    actions : actions
}
