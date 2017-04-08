var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false});
var fs = require('fs');
var moment = require('moment');
var stringify = require('csv-stringify');
var file = '../data/marketprice.csv';

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
        console.log(result);
        var input = [{date: new Date(), code: code, price: result}];

        var stringifier = stringify(input, {
          formatters: {
            date: function (value) {
              return moment(value).format('YYYY-MM-DD');
            }
          }
        }, function (err, output) {
          console.log(output);
          fs.appendFile(file,
            output,
            'utf8',
            callback(err, output));
        });
        // fs.appendFile('../data/marketprice.json',
        //   result,
        //   callback(err, result));
        // fs.readFile('../data/marketprice.json', function (err, data) {
        //   if (err) {
        //     fs.writeFile('../data/marketprice.json', JSON.stringify({date: new Date(), code: code, price: result}), function (e) {
        //       console.log(e);
        //     });
        //   }
        //   var json = JSON.parse(data);
        //   json.push({date: new Date(), code: code, price: result});
        //   fs.writeFile('../data/marketprice.json', JSON.stringify(json), function (writeerror) {
        //     if (writeerror) {
        //       throw writeerror;
        //     }
        //     callback(writeerror, result);
        //   });
        // });
      })
      .catch(function (error) {
        return callback(error, 'Error');
      });
};

getCurrentPrice('FSIDVDU:SP', function (error, result) {
  if (!error) {
    console.log(result);
    return result;
  }
  else {
    //console.log(error);
    return error;
  }
});
//getCurrentPrice.apply(nightmare, ['FSIDVDU:SP']);
