var exec = require('child_process').exec
var conf = require('../config')('hardware')


/*child_process.execFile('ls', ['-lah', '/tmp'], function(error, stdout, stderr){
  console.log(stdout);
});*/

var options = {
  encoding: 'utf8'
  , timeout: 0
  , maxBuffer: 200 * 1024
  , killSignal: 'SIGTERM'
  , cwd: null
  , env: null
}

var audioDetect = function(text) {
  
}

var audio = exec(conf.audio.cmd, options, function(err, stdout, stdin) {
    console.log(err, stdout, stdin)
})

audio.stdout.on('data', function(data) {
  console.log('stdout: ' + data)
})

audio.stderr.on('data', function (data) {
  console.log('grep stderr: ' + data)
})

audio.on('close', function(code, sig) {
  console.log('child process exited with code ' + code, sig)
})

process.on('message', function(m) {
  console.log('CHILD got message:', m)
})

setInterval(function() {
    // audio.stdin.setEncoding = 'utf-8'
    // audio.stdin.write('fuck me ' + Math.random() + 'times. \n')
}, 500)

// audio.kill('SIGHUP')
audio.stdin.write("fuck me\n")

module.exports = audio
