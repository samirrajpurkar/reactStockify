var exec = require('child_process').exec;
var child = exec('node ./marketpriceserver.js');
child.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});
child.stderr.on('data', function (data) {
  console.log('stdout: ' + data);
});
child.on('close', function (code) {
  console.log('closing code: ' + code);
});