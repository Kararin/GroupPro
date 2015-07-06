var http = require('http');
var url = require('url');

function start (route, handle) {
	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');

	function onRequest (request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for'  + pathName + ' received.');
    route(handle, pathName, response);
	};
};

exports.start = start;