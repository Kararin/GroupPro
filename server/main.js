var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers');
	handle = {
		'.html' : requestHandlers.showPage,
		'.css' : requestHandlers.showPage,
		'.js' : requestHandlers.showPage,
		'/sayHello' : requestHandlers.sayHello,
		'getJSON' : requestHandlers.getJSON
	};

server.start(router.route, handle);