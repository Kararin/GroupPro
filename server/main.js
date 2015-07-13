var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers');
	handle = {
		'.html' : requestHandlers.showPage,
		'.css' : requestHandlers.showPage,
		'.js' : requestHandlers.showPage,
<<<<<<< HEAD
		'.json': requestHandlers.showPage,
=======
>>>>>>> 2886bc5307186ba074dea4fba5e92cd8de73f191
		'/sayHello' : requestHandlers.sayHello,
		'getJSON' : requestHandlers.getJSON
	};

server.start(router.route, handle);