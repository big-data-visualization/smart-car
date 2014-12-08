var path = require('path')

var development = {
  motors: {
    // Use default config from: five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1
/*    'pins': {
        'a': [3, 4]
        , 'b': [6, 7]
    }*/
    pins: {}
    , 'speed': 10000
  }
  , audio: {
    'cmd': 'cd /home/t1/yuyin/linuxEASR-new/ && ./linuxEASR cfg.txt'
  }
  , shout: {
    'cmd': '/bin/sh ' + path.join(__dirname, '../service/shout.sh')
  }

  , servo: {
    pins: 10
  }

  , camera: {
    'cmd': 'python'
    , 'params': ['/home/t1/face_recgonise/facedetect.py', '--cascade=/home/t1/face_recgonise/face.xml', '0']
  }
}

module.exports = {
  development: development
}