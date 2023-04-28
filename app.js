const http = require('http');
const fs = require('fs');

//HTTP => (request, responese)

http.createServer((request, response)=>{
  const file = request.url == '/' ?
  './www/index.html' : './www${request.url}';
  console.log(request);
}
if(request.url == '/login'){
  let data = [];
  request.on("data", value =>{
    data.push(value);
  }).on("end", ()=>{
    let params = Buffer.concat(data).toString();
    conzole.log(params);
    response.write(params),
    response.end();
  });
}

fs.readFile(file, (err, data) =>{
  if(err){
    response.writeHead(404, {"Content-Type":"text/plain"})
    response.write("Not found");
    response.end();
  }else{
    const extension= file.split('.').pop();
    switch(extension) {
      case 'txt':
      response.wirteHead(200, {"Content-Type":"text/plain"})
      break;
      case 'html':
      response.writeHead(200, {"Content-type":"text/html"})
      break;
      case 'css':
      response.writeHead(200, {"Content-type":"text/css"})
      break;
      case 'ico':
      response.writeHead(200, {"Content-type":"image/x-icon"})
      break;
      case 'js':
      response.writeHead(200, {"Content-type":"text/javascript"})
      break;
      response.writeHead(200, {"Content-type":"image/jpg"})
      break;
      default:
      response.writeHead(200, {"Content-type":"text/html"})

    }
    response.write(data);
    response.end()
    }
  });
}).listen(4444);
