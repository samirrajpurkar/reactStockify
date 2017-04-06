var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false});

getCurrentPrice = function (code, callback) {
  nightmare
    .goto('https://www.bloomberg.com/quote/' + code)
    .evaluate(function () {
      return (
      [
        String(document.querySelector('.name').innerHTML),
        String(document.querySelector('.price').innerHTML)
      ]
      );
    })
    .end()
      .then(function (result) {
        return callback(null, result);
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
