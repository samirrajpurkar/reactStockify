const baseurl = 'http://localhost:8080/investments';

export const loadInvestments = () => {
  return fetch(baseurl)
    .then(res => res.json());
};

export const createInvestment = (investment) => {
  return fetch(baseurl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(investment)
  })
    .then(res => res.json());
};

export const saveInvestment = (investment) => {
  return fetch(`${baseurl}/${investment.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(investment)
  })
    .then(res => res.json());
};

export const deleteInvestment = (id) => {
  return fetch(`${baseurl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};