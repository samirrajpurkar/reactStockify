var xray = require('x-ray')();
var app = require('express')();

app.param('investment_code', function (req, res, next, investment_code) {
  req.investment_code = investment_code;
  next();
});

app.get('/code/:investment_code', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });

  var stream = xray('https://www.bloomberg.com/quote/' + String(req.investment_code),'.basic-quote', {
    date: '.price-datetime',
    price: '.price'
  }).stream();
  stream.pipe(res);
});

// app.get('/', function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader('Access-Control-Allow-Headers', '*');

//   res.writeHead(200, {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//   });

//   var stream = xray('https://www.bloomberg.com/quote/NKY:IND','.basic-quote', {
//     date: '.price-datetime',
//     price: '.price'
//   }).stream();
//   stream.pipe(res);
// });
app.listen(5555);

