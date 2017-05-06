const baseurl = 'http://localhost:8080/investments';

export const loadInvestments = () => {
  return fetch(baseurl)
    .then(res => res.json());
};