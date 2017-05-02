import { filterInvestments, removeInvestment, addInvestment, findById, toggleInvestment, updateInvestment } from './investmentHelpers';

test('filterInvestments should return all investments for the root route', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const result = filterInvestments(startInvesments, '/');
  expect(result).toEqual(startInvesments);
});

test('filterInvestments should only return completed items for the complete route', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const expected = [
    {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true}
  ];
  const result = filterInvestments(startInvesments, '/complete');
  expect(result).toEqual(expected);
});

test('filterInvestments should only return incompleted items for the active route', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const expected = [
      {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
      {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const result = filterInvestments(startInvesments, '/active');
  expect(result).toEqual(expected);
});

test('removeInvestment should remove an item by id', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const targetId = 2;
  const expectedInvestments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const result = removeInvestment(startInvesments, targetId);

  expect(result).toEqual(expectedInvestments);
});

test('removeInvestment should not mutate the original array', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const targetId = 2;
  const expectedInvestments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const result = removeInvestment(startInvesments, targetId);

  expect(result).not.toBe(expectedInvestments);
});

test('updateInvestment should not mutate the original array', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const updatedInvestment = {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: true};
  const result = updateInvestment(startInvesments, updatedInvestment);
  expect(result).not.toBe(updateInvestment);
});

test('updateInvestment should update investment by id', () => {
  const startInvesments = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: false},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];
  const updatedInvestment = {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: true};
  const expected = [
        {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true},
        {id: 2, category: 'Income', price: 39.99, name: 'PIMCO', isComplete: true},
        {id: 3, category: 'Commodity', price: 29.99, name: 'United Gold', isComplete: false}
  ];

  const result = updateInvestment(startInvesments, updatedInvestment);
  expect(result).toEqual(expected);
});

test('toggleInvestment should not mutate the original investment', () => {
  const startInvestment = {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: false};
  const result = toggleInvestment(startInvestment);
  expect(result).not.toBe(startInvestment);
});

test('toggleInvestment should toggle this isComplete property of investment', () => {
  const startInvestment = {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: false};
  const expected = {id: 1, category: 'Equity', price: 49.99, name: 'US Technology', isComplete: true};
  const result = toggleInvestment(startInvestment);
  expect(result).toEqual(expected);
});

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