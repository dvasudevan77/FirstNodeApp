var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  res.end('How are you?\n');
  res.end('I am doing good.\n');
  res.end('Weather is great outside.\n');
}).listen(1389, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1389/');
