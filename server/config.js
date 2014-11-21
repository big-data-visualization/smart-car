var path = require('path')
module.exports = function(type) {
    return require(path.join(__dirname, '../config/' + type))[process.NODE_ENV || 'development']
}