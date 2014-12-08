var exec = require('child_process').exec
var conf = require('../config')('hardware')
var shout = conf.shout.cmd
var shouter
var status = false

module.exports = {
    play: function(data) {
        var content = data.content;
        content = content.replace(/点击.*$/,"");
        content = content.replace("提莫队长", "大数据机器人");
        console.log(shout + ' -' + data.type + ' ' + content)
        shouter = exec(shout + ' -' + data.type + ' ' + content)
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
