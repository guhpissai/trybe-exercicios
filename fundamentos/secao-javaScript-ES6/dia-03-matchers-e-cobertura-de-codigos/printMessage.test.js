const { info, printMessage} = require('./printMessage');

describe('Testa a funcao printMessage', () => {
  it('Espera que o objeto passado possua a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Espera que a resposta contenha "Boas vindas"', () => {
    expect(printMessage(info)).toMatch(/Boas vindas/);
  });
  it('Espera que a resposta tenha o nome correto do persongagem', () => {
    expect(printMessage(info)).toMatch(/Margarida/);
  })
});