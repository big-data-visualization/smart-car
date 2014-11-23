console.log(require('play'))  

  var play = require('play').Play();

  // play with a callback
  play.sound('../data/cry.wav', function(){

/*    // these are all "fire and forget", no callback
    play.sound('./wavs/sfx/alarm.wav');
    play.sound('./wavs/sfx/crinkle.wav');
    play.sound('./wavs/sfx/flush.wav');
    play.sound('./wavs/sfx/ding.wav');*/

  });/*

  //If you want to know when the player has defintely started playing
  play.on('play', function (valid) {
    console.log('I just started playing!');
  });
  play.sound('./wavs/sfx/ding.wav');

  //If you want to know if this can't play for some reason
  play.on('error', function () {
    console.log('I can\'t play!');
  });*/