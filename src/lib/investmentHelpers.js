export const addInvestment = (investments, newinvestment) => [...investments, newinvestment];

export const toggleInvestment = (investment) => ({...investment, isComplete: !investment.isComplete});
export const findById = (id, list) => list.find(item => item.id === id);
export const generateId = () => Math.floor(Math.random() * 100000);