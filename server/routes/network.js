var http = require('http')

module.exports = function(io) {

  var hardwareConf = require('../config')('hardware')
  var motors = require('../models/motors')
  var servo = require('../models/servo')
  var camera = require('../models/camera')
  
  // var audio = require('../models/audio')
  var shout = require('../models/shout')
  var shoutAction = require('../models/shoutAction')

  var userConnects = []
  var chatRequest = null

  // pipe camera
  
  camera.stdout.on('data', function (data) {
    data && userConnects.forEach(function(conn) {
      conn && conn.emit('camera', {
        base64: data + ''
      })
    })
})


  io.on('connection', function(socket) {

    userConnects.push(socket)

    socket.monitor('connected', Date.now())

    socket.on('shout', function(data) {
        console.log(data);
        if(data.content == '123'){
            shout.play({
                type: "f",
                content: '/home/t1/smart-car/data/manong.wav' 
            })
            return;
        }

        var flag = data.content.substring(0, 1);
        if(flag == '@'){
            shout.play({
                type: "t",
                content: data.content
            })
            return;
        }

    	var url = 'http://api.mrtimo.com/Simsimi.ashx?parm=' + encodeURIComponent(data.content)

      // cancel the last chatRequest
      // chatRequest && chatRequest.destroy()

    	chatRequest = http.get(url, function(res) {
    		var text = ''
    		res.on('data', function(chunk) {
      		text += chunk
    		})
    		res.on('end', function() {
                var isHandled = shoutAction.actions(data.content);
                if(!isHandled){
                    shout.play({
                        type: "t",
                        content: text
                    })
                }

    		})
    	})
    })

    // audio.on('data', function(data) {
    // })

    /**
     * On car driving control
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */

    socket.on('hardware:keypress', function(data) {
      var key = data.key
      motors[key] && motors[key]()
    })


/*    var session = global.session
    
    if(!session) return

    var roomid = session.roomid || 100

    socket.emit('connected', {
      roomid: roomid
    })*/

    /*var binaryServer = require('binaryjs').BinaryServer
    var wav = require('wav')
    var fileWriter = null

    client.on('stream', function(stream, meta) {
      var fileWriter = new wav.FileWriter('demo.wav', {
        channels: 1,
        sampleRate: 48000,
        bitDepth: 16
      })
      stream.pipe(fileWriter)
      stream.on('end', function() {
        fileWriter.end()
      })
    })

    client.on('close', function() {
      if (fileWriter != null) {
        fileWriter.end()
      }
    })
    */


/*    var fs = require('fs')
    var ws = fs.createWriteStream('audio.wav')

    var stop = false

    socket.on('audio', function(data) {
      !stop && ws.write(JSON.stringify(data.data))
    })

    setTimeout(function() {
      stop = true
      ws.end()
    }, 3000)*/
  })
}
