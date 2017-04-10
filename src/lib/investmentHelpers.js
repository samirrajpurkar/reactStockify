export const addInvestment = (investments, newinvestment) => [...investments, newinvestment];

export const generateId = () => Math.floor(Math.random() * 100000);