var path = require('path');

function route(handle, pathName, response) {
    var extName = path.extname(pathName),
        pathFromUrl = getPath(pathName);
    console.log(pathFromUrl);
    console.log(typeof handle[pathFromUrl]);
    console.log("About to route a request for " + pathName);
    if (typeof handle[extName] === 'function') {
        handle[extName](response, pathName, extName);
    } else {
        if (typeof handle[pathFromUrl] === 'function') {
             handle[pathFromUrl](response, pathName, extName);
        } else {
            console.log("No request handler found for " + pathName);
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not found");
            response.end();  
        } 
    };
 };

 function getPath(url) {
     var pathArray = url.split('/');
     return pathArray[pathArray.length - 1];
 };
exports.route = route;

