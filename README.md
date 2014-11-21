# smart-car

A hardware begin guide for Front-End developer, enjoy it!

![](https://raw.githubusercontent.com/big-data-visualization/smart-car/master/assets/photo.jpg)

## FEAUTRUES

- [x] Real-time video camera.
- [x] Control of driving though web socket.
- [ ] Speech recognition.
- [ ] Image identification.

## HARDWARE

![](https://raw.githubusercontent.com/big-data-visualization/smart-car/master/assets/raspberry_pi_plus_arduino.jpg)

- [Raspberry Pi](http://www.raspberrypi.org/)

![](https://raw.githubusercontent.com/big-data-visualization/smart-car/master/assets/pi.jpg)

- [Arduino](http://www.arduino.cc/)

![](https://raw.githubusercontent.com/big-data-visualization/smart-car/master/assets/arduino.jpg)

- Motor Shield

![](https://raw.githubusercontent.com/big-data-visualization/smart-car/master/assets/motorshield.jpg)

## GETSTART

### require:

- [node](http://nodejs.org/) >= 0.11
- [mongodb](http://www.mongodb.org/)
- [bower](http://bower.io)
- [gulp](http://gulpjs.com)

### depends on:

- [johnny-five](https://github.com/rwaldron/johnny-five)
- [koa](http://koajs.com)
- [socket.io](http://socket.io/)
- [d3](http://d3js.org/)

### Client

Install front-end modules

```bash
$ cd client
$ bower install
$ gulp
```

Build static resources

```bash
$ cd client
$ gulp
```

### Server

Config it first

```
$ vi config/server.js
```

Run the server

```bash
$ cd client
$ node index
```

Then head to http://localhost:8000 in your browser.

### AUTHORS

- [wanghaixu]() - UI Design
- [leecade]() - Coding
- [dingrui]() - Speech recognition
- [liyue]() - Image identification
- [lihao]() - Appearance Design
- [weina]() - Scene Design
