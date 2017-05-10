var Xray = require('x-ray');
var x = Xray();

export const getMarketPrice = () => {
  x('https://www.bloomberg.com/quote/NKY:IND', '.price')(function (error, price) {
    console.log(price);
  });
};
