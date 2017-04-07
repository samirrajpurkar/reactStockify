var http = require('http');
var exec = require('child_process').exec;
var visits = 0;
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    
    var child = exec('node ./nm.js');
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
        res.end(data);
    });
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
    // visits += 1;
    // var msg = 'Visits: ' + visits;
    // res.end(msg + '\n'); console.log(msg);
    // if(visits == 5) {
    //     process.exit();
    // }
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');
