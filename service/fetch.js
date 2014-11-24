var spawn = require('child_process').spawn
var carme = spawn('python', ['/home/t1/face_recgonise/facedetect.py', '--cascade=/home/t1/face_recgonise/face.xml', '0'])

console.log('/usr/bin/python ~/face_recgonise/facedetect.py --cascade=/home/t1/face_recgonise/face.xml 0')

carme.stdout.on('data', function (data) {
  console.log('stdout: ==============' + data + '=========');
});

carme.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    carme.kill()
});

carme.on('close', function (code) {
      console.log('child process exited with code ' + code);
  });