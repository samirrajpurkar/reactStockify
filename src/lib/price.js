const baseurl = 'http://localhost:5555/code/';

export const getPriceFromBloomberg = (code) => {
  return fetch(baseurl + String(code))
    .then(res => res.json())
    .catch(function (error) {
      console.log('Error fetching price....', error);
    });
};

