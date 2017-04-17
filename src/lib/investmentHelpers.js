export const addInvestment = (investments, newinvestment) => [...investments, newinvestment];

export const findById = (id, list) => list.find(item => item.id === id);
export const generateId = () => Math.floor(Math.random() * 100000);