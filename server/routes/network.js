module.exports = function(io) {
  io.on('connection', function(socket) {

    socket.monitor('connected', Date.now())

    var session = global.session
    
    if(!session) return

    var roomid = session.roomid || 100

    socket.emit('connected', {
      user: roomid
    })

    socket.on('client', function(data) {
      socket.monitor('client', data)
    })


    var testData = function() {
      var ret = []
      var tmp = {}
      for(var i = 0, n = 10; i < n; i++) {

        tmp = {
          userinfo: {
            id: "xx",
            nickname: "xXx",
            email: "",
            hi: "",
            avatar: "",
            jointime: "",
            score: ""
          },
          gameinfo: {
            health: 100 * Math.random(),
            rotation: 1,
            pos: [500 * Math.random(), 500 * Math.random()],
            alive: Math.random() > 0.5
          }
        }
        ret.push(tmp)
      }

      return ret
    }

    setInterval(function() {
        socket.emit('room:1', testData())
    }, 30)
  })
}
