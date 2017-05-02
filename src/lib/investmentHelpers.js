export const filterInvestments = (investments, route) => {
  switch (route) {
  case '/active':
    return investments.filter(investment => investment.isComplete === false);
  case '/complete':
    return investments.filter(investment => investment.isComplete === true);
  default:
    return investments;
  }
};

export const removeInvestment = (investments, id) => {
  const removeIndex = investments.findIndex(investment => investment.id === id);
  return  [
    ...investments.slice(0, removeIndex),
    ...investments.slice(removeIndex + 1)
  ];
};

export const addInvestment = (investments, newinvestment) => [...investments, newinvestment];

export const updateInvestment = (list, investment) => {
  const index = list.findIndex((item) => item.id === investment.id);
  return [
    ...list.slice(0, index),
    investment,
    ...list.slice(index + 1)
  ];
};
export const toggleInvestment = (investment) => ({...investment, isComplete: !investment.isComplete});
export const findById = (id, list) => list.find(item => item.id === id);
export const generateId = () => Math.floor(Math.random() * 100000);