//http://ourjs.com/detail/529ca5950cb6498814000005
const server = require("./server"),
	  router = require("./router"),
      requestHandlers = require("./requestHandlers");

//请求处理程序的集合
var handle = {};

handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);