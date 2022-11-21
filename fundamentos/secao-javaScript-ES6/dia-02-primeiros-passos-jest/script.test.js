const myRemove = require('./script')

test('O array esperado  1, 2 e 3', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});