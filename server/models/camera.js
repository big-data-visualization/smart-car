var spawn = require('child_process').spawn
var conf = require('../config')('hardware')

// pipe camera to web
var camera = spawn(conf.camera.cmd, conf.camera.params)

/*camera.stdout.on('data', function (data) {
  global.socket && global.socket.broadcast('camera', {
    base64: data + ''
  })
  // console.log('stdout: ==============' + data + '=========');
});*/

camera.stderr.on('data', function (data) {
    // console.log('stderr: ' + data);
    camera.kill()
});

camera.on('close', function (code) {
  // console.log('child process exited with code ' + code);
});

module.exports = camera
