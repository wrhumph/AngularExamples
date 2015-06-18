/* global process */
var express = require('express');
var app = express();

var http = require('http');

app.use(express.static('public'));

var listen_port = 8080;

var i = 0;
while (i < process.argv.length) {
    var arg = process.argv[i++];
    if (arg == '-port') {
        listen_port = process.argv[i++];
    }
}

app.get('/test', function(req, res){
	var obj = {};
	obj.title = 'title';
	obj.data = 'data';
    
    // http://www.google.com/finance/info?q=NSE:APL,VFIIX,SPY
    
    var options = {
        host: 'www.google.com',
        path: '/finance/info?q=NSE:'
    };

	console.log('params: ' + JSON.stringify(req.params));
	console.log('body: ' + JSON.stringify(req.body));
	console.log('query: ' + JSON.stringify(req.query));
    
    options.path += req.query['symbols'];

    console.log("Calling google API with " + options.path);
    
    function report(text) {
        var start = text.indexOf("[");
        if (start > 0) {
            text = text.substr(start);
        }
        //console.log(text);
	    res.header('Content-type','application/json');
	    res.header('Charset','utf8');
        res.send(text);
    }
    
    http.request(options, function(response) {
        var result = "";
        response.on('data', function(chunk) { result += chunk; });
        response.on('end', function() { console.log("HAVE RESULT"); report(result); });
    }).end();
    console.log("API call complete");
    console.log("Result: " + options.result);
	

	//res.send(JSON.stringify(obj));
});

var server = app.listen(listen_port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

