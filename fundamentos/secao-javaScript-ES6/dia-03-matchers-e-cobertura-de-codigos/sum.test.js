const sum = require('./sum');

describe('Testando a funcao sum', () => {
  it('Esperado que o retorno seja 9', () => {
    (expect(sum(4,5)).toBe(9));
  });
  it('Esperado que o retorno seja 0', () => {
    (expect(sum(0,0)).toBe(0));
  });
  it('Espera que lance um erro: parameters must be numbers', () => {
    expect(() => sum(4, '5').toThrow(Error('parameters must be numbers')));
  });
});