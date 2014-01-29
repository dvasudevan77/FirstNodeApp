
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World. How are you?\n');
}).listen(1389, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1389/');
