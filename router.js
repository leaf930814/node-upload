function route(handle,pathname,response,request){

	if(typeof handle[pathname]==='function'){
		handle[pathname](response,request);
	}else{
		//404
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("404 Not found");
		response.end();
		
	}
}

exports.route = route;