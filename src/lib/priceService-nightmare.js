//var Nightmare = require('nightmare');
import {Nightmare} from 'nightmare';

export const getMarketPrice = (code) => {
  new Nightmare()
    .goto('https://www.bloomberg.com/quote/' + String(code))
    .evaluate(function () {
      return document.querySelector('.price').innerHTML;
    })
    .end()
    .then(function (price) {
      console.log(price);
    })
    .catch(function (error) {
      console.log('Search failed:', error);
    });
};

//getMarketPrice('NKY:IND');