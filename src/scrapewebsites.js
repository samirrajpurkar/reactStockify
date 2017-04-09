var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false});
var fs = require('fs');
var moment = require('moment');
var stringify = require('csv-stringify');
var file = '../data/marketprice.csv';
var isin = process.argv[2];

getCurrentPrice = function (code, callback) {
  nightmare
    .goto('https://www.bloomberg.com/quote/' + code)
    .evaluate(function () {
      return (
      // [
      //   String(document.querySelector('.name').innerHTML),
      //   String(document.querySelector('.price').innerHTML)
      // ]
        String(document.querySelector('.price').innerHTML)
      );
    })
    .end()
      .then(function (result) {
        var input = [{date: new Date(), code: code, price: result}];

        var stringifier = stringify(input, {
          formatters: {
            date: function (value) {
              return moment(value).format('YYYY-MM-DD');
            }
          }
        }, function (err, output) {
          fs.appendFile(file,
            output,
            'utf8',
            callback(err, output));
        });
      })
      .catch(function (error) {
        return callback(error, 'Error in webScraping....');
      });
};

getCurrentPrice(isin, function (error, result) {
  if (!error) {
    // A bit of hack to re-extract current price from the
    // formated output -> 2017-04-08,FSIDVDU:SP,1.2044
    var currentprice = String(result).split(',')[2];

    // PLEASE DO NOT REMOVE THIS CONSOLE.LOG STATEMENT
    console.log(currentprice);
    // This output is what is send back by the http server to the client.
    return currentprice;
  }
  else {
    return error;
  }
});
