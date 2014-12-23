var path = require('path')

var development = {

  // App key used to the session
  appKey: ['some secret hurr'],

  // listern port
  port: process.env.PORT || 8000,

  // client dist
  dist: path.join(__dirname, '../client/dist'),

  // auth handle url
  authUrl: 'http://cas.gitlab.pro/auth',

  uuapProxy: 'http://ext256.offline.bae.baidu.com/uuap-proxy/?url=http://cas.gitlab.pro/auth',

  userInfoUrl: 'http://family.baidu.com/portal/search/suggestion?searchWord=',

  // Auth cookie for get user info from family
  userInfoCookieAuth: 'express.sid=s%3AwsJKdJ8psYrzo%2BWs27Je2wap.KIQ5QRaDUuEOPcsnmWclta0OtKtZvG4%2FhI8NjW%2BOTBE;',

  mongo: '127.0.0.1/hardware',

  monitorPort: 8001,

  // parevent template cache
  // 86400000
  maxage: 0
}



module.exports = {
  development: development
}

