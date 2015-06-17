/* global process */
var express = require('express');
var app = express();

app.use(express.static('public'));

var listen_port = 8080;

var i = 0;
while (i < process.argv.length) {
    var arg = process.argv[i++];
    if (arg == '-port') {
        listen_port = process.argv[i++];
    }
}


var server = app.listen(listen_port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

