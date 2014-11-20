var path = require('path')
var conf = require(path.join(__dirname, '../config/server'))[process.NODE_ENV || 'development']
module.exports = conf