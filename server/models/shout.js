var exec = require('child_process').exec
var conf = require('../config')('hardware')
var shout = conf.shout.cmd
var shouter
var status = false

module.exports = {
  play: function(data) {
    shouter = exec(shout + ' -' + data.type + ' ' + data.content)
    status = true
    shouter.on('close', function (code) {
      console.log('child process exited with code ' + code);
    })
  },
  stop: function() {
    shouter && shouter.kill('SIGHUP')
  },
  status: function() {
    return status
  }
}