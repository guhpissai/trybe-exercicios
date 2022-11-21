const { myRemove, myFizzBuzz, encode, decode, mapString } = require('./script');

test('O array esperado  1, 2 e 3', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
test('O array esperado nao seja 1, 2, 3 e 4', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
test('O array esperado e 1, 2, 3 e 4', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});


describe('Testa a funcao myFizzBuzz', () => {
  it('Verifica se de acordo com o parametro, retorna o valor esperado', () => {});
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(6)).toBe('fizz');
  expect(myFizzBuzz(50)).toBe('buzz');
  expect(myFizzBuzz(1)).toBe(1)
  expect(myFizzBuzz('a')).toBe(false)
});

describe('Testa funcoes encode e decode', () => {
  it('Testa se encode e decode sao funcoes', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('O resultado esperado e 1, 2, 3, 4 e 5', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  }) 
  it('O resultado esperado e: a, e, i, o e u', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  }) 
  it('Se nao for vogal o resultado esperado e a consoante', () => {
    expect(encode('p985')).toBe('p985');
  })
  it('Checa se o retorno da string tem o mesmo numero de caracteres que o parametro', () => {
    expect(encode('gustavo').length).toBe(7);
  })
});
