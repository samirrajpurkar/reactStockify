import { addInvestment, findById } from './investmentHelpers';

test('findById should return the expected item from the array', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const expected = {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false};
  const result = findById(2, startInvesments);
  expect(result).toEqual(expected);
});

test('addInvestment should add the passed investment to the list', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false}
  ];

  const newInvestment = {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false};

  const expected = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];

  const result = addInvestment(startInvesments, newInvestment);

  expect(result).toEqual(expected);
});

test('addInvestment should not mutate the existing investments array', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false}
  ];

  const newInvestment = {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false};

  const expected = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];

  const result = addInvestment(startInvesments, newInvestment);

  expect(result).not.toBe(startInvesments);
});