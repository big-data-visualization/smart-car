var exec = require('child_process').exec
var conf = require('../config')('hardware')
var shout = conf.shout.cmd
var shouter
var status = false

module.exports = {
    play: function(data) {
        console.log(shout + ' -' + data.type + ' ' + data.content.replace(/点击.*$/,""))
        shouter = exec(shout + ' -' + data.type + ' ' + data.content.replace(/点击.*$/,""))
    status = true
    shouter.on('close', function (code) {
      //console.log('child process exited with code ' + code);
    })
  },
  stop: function() {
    shouter && shouter.kill('SIGHUP')
  },
  status: function() {
    return status
  }
}
