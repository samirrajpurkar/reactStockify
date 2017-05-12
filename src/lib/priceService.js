var xray = require('x-ray')();
var app = require('express')();

app.get('/', function (req, res) {
  var stream = xray('https://www.bloomberg.com/quote/NKY:IND','.basic-quote', {
    date: '.price-datetime',
    price: '.price'
  }).stream();
  stream.pipe(res);
});
app.listen(5555);