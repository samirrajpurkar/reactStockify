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