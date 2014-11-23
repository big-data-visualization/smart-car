var path = require('path')

var development = {
  motors: {
    'pins': {
        'a': [3, 4]
        , 'b': [6, 7]
    }
    , 'speed': 100
  }
  , audio: {
    'cmd': 'cd /home/t1/yuyin/linuxEASR-new/ && ./linuxEASR cfg.txt'
    // 'cmd': '/home/t1/yuyin/linuxEASR-new/xxx'
  }
  , shout: {
    'cmd': '/bin/sh ' + path.join(__dirname, '../service/shout.sh')
  }
}

module.exports = {
  development: development
}