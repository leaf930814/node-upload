const querystring = require("querystring"),
      fs = require("fs"),
      formidable = require("formidable");

//启动页
function start(response){
  console.log("Request handler 'start' was called.");
	
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html;'+'charset=UTF-8"/>'+'</head>'+
	'<body>'+
	 '<form action = "/upload" enctype="multipart/form-data" '+' method="post">'+
      '<input type="file" name="upload" multiple="multiple"/>'+
      '<input type="submit" value="上传图片" />'+
    '</form>'+
  '</body>'+
  '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();  
}

//上传
function upload(response,request){

  let form = new formidable.IncomingForm();
  form.uploadDir='tmp';

  form.parse(request,function(error,fields,files){
  	 console.log("parsing done");
  	 fs.renameSync(files.upload.path,"tmp/test.jpg");
  	 response.writeHead(200,{"Content-Type":"text/html"});
  	 response.write("received image:<br/>");
  	 response.write("<img src='/show' />")
  	 response.end();
  });
 
}

//显示
function show(response){

	fs.readFile("tmp/test.jpg","binary",(error,file)=>{
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error+"\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/jpg"});
			response.write(file,"binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;