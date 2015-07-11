var http = require('http');
var port = 8080;
var server = http.createServer(function(req, res) {
  console.log('Hello World');
  res.write('Hello World');
  res.end();
});

server.listen(port);

console.log('A server is starting in port ', port);
