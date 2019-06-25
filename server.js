const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200, {"content-type": "text/html"});
    response.write("<!DOCTYPE html >");
    response.write("<html>");
    response.write("<head>");
    response.write("<title> First Server </title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello!");
    response.write("</body>"); 
    response.write("</html>");
    response.end();
});

server.listen(3000);
console.log("Your server is up and running on port 3000....")