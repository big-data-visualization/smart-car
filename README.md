# smart-car

A hardware begin guide for Front-End developer, enjoy it!

## FEAUTRUES

- [x] Real-time video camera.
- [x] Control of driving though web socket.
- [ ] Speech recognition.
- [ ] Image identification.

## GET START

require: 

- [node](http://nodejs.org/) >= 0.11
- [mongodb](http://www.mongodb.org/)
- [bower](http://bower.io)
- [gulp](http://gulpjs.com)

depends on:

- [johnny-five](https://github.com/rwaldron/johnny-five)
- [koa](http://koajs.com)
- [socket.io](http://socket.io/)
- [d3](http://d3js.org/)

### hardware

### client

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

### server

Config it first

```
$ vi config/server.js
```

Run the server

```bash
$ cd client
$ node index
```

See it in browser:

http://127.0.0.1:8000

### AUTHORS

- [wanghaixu]() - Design
- [leecade]() - Coding
- [dingrui]() - Speech recognition
- [liyue]() - Image identification
