var http = require('http');
var exec = require('child_process').exec;

var params = function (req) {
  var q = req.url.split('?');
  var result = {};

  if (q.length >= 2) {
    q[1].split('&').forEach((item) => {
      try {
        result[item.split('=')[0]] = item.split('=')[1];
      } catch (e) {
        result[item.split('=')[0]] = '';
      }
    });
  }
  return result;
};

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });

  var isin = params(req).isin;
  console.log(isin);

  var child = exec('node ./scrapewebsites.js' + ' ' + isin);
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    res.end(data);
  });
  child.stderr.on('data', function (data) {
    console.log('stdout: ' + data);
  });
  child.on('close', function (code) {
    console.log('closing code: ' + code);
  });
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');
