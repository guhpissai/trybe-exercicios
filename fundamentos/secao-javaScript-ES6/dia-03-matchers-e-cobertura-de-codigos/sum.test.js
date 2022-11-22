const sum = require('./sum');

describe('Testando a funcao sum', () => {
  it('Esperado que o retorno seja 9', () => {
    (expect(sum(4,5)).toBe(9));
  })
})