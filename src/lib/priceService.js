var xray = require('x-ray')();
var app = require('express')();

// export const getMarketPrice = () => {
//   xray('https://www.bloomberg.com/quote/NKY:IND', '.price')(function (error, price) {
//     console.log(price);
//   });
// };
app.get('/', function (req, res) {
  var stream = xray('https://www.bloomberg.com/quote/NKY:IND', '.price').stream();
  stream.pipe(res);
});
app.listen(5555);