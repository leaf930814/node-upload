var http = require("http");
var url = require("url");

function start(route, handle){
    let onRequest = (request, response) => {
    let pathname = url.parse(request.url).pathname;

 		route(handle,pathname,response,request);		
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
