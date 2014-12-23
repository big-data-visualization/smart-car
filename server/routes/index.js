var path = require('path')
var staticServe = require('koa-static')
var router = require('koa-router')
var hbs = require('koa-hbs')

var routers = {}

module.exports = function(app, io){

  var conf = global.conf

  app.use(hbs.middleware({
    viewPath: path.join(conf.dist, 'views'),
    disableCache: true
  }))

  app.use(router(app))

  app.get('/', function *() {
    yield this.render('index', {})
  })

  app.use(staticServe(path.join(conf.dist, ''), {
    maxage: conf.maxage
  }))
}