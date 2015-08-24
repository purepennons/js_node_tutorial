"use strict";

var http = require('http');
var port = process.argv[2];
var server = http.createServer(function (req, res) {
  // console.log('Hello World');
  res.write('Hello GG');
  res.end();
});

server.listen(port);

// console.log('A server is starting in port ', port);
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/week2/transpiled/hello.js.map