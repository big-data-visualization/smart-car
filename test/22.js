var http = require('http')

var txt = encodeURIComponent('草泥马')

var url = 'http://api.mrtimo.com/Simsimi.ashx?parm=' + txt;

http.get(url, function(res) {
    var text = '';

    res.on('data', function(chunk) {
        text += chunk;
    });
    res.on('end', function() {
        console.log(text);
    });
})
