const baseurl = 'http://localhost:5555/';

export const getPriceFromBloomberg = (code) => {
  return fetch(baseurl)
    .then(res => res.json());
};
