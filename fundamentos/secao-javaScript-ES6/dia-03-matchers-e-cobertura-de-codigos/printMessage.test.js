const { info, printMessage} = require('./printMessage');

describe('Testa a funcao printMessage', () => {
  it('Espera que o objeto passado possua a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
});