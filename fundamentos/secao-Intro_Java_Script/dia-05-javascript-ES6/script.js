    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // let pessoa = {
    //   nome: 'Henri',
    //   idade: 20
    // }
    // pessoa = {
    //   nome: 'Luna',
    //   idade: 19
    // } // Altere essa estrutura para corrigir o erro.
    // console.log('Nome:', pessoa.nome);
    // console.log('Idade:', pessoa.idade);


    // let hello = nome => `Olá, ${nome}!`
    // let nome = 'Ivan';
    // console.log(hello(nome));

    // let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
    // let nome = 'Ivan';
    // let sobrenome = 'Pires';
    // console.log(nomeCompleto(nome, sobrenome));
    

  // let speed = 90;

  // const speedCar = (speed) => (
  //   speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
  // );

  // console.log(speedCar(speed));

  // let motor = 'Desligado';

  // let ligarDesligar = () => (
  //   motor === 'Desligado' ? motor = 'Ligado' : motor = 'Desligado'
  // )

  // console.log(`O motor esta ${ligarDesligar()}`);
  // console.log(`O motor esta ${ligarDesligar()}`);
  // console.log(`O motor esta ${ligarDesligar()}`);


  // const pi = 3.14;

  // let circleArea = raio => pi * (raio ** 2);
  // console.log(`Essa e a area do circulo ${circleArea(3)}`);

  // const longestWord = frase => {
  //   let wordArray = frase.split(' ');
  //   let maxLength = 0;
  //   let result = '';
  //   for (let word of wordArray) {
  //     if (word.length > maxLength) {
  //       maxLength = word.length;
  //       result = word
  //     }
  //   }
  //   return result;
  // }
  // console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

  // const substituaX = (nome) => {
  //   const frase = 'Tryber x aqui!';
  //   const newWord = nome;
  //   for (let letter of frase) {
  //     if (frase[letter] === 'x') {
  //       frase[letter] = newWord;
  //     }
  //   }
  //   return frase;
  // }
  // console.log(substituaX('gustavo'));



  for (let index = 0; index < meuNome.length; index += 1) {
    let meuNome = 'Gustavo';
    if (meuNome[index] === 'u') {
      meuNome[index] = 'b';
    } else {
      console.log('Nada')
    }
    return meuNome;
  }

  console.log(meuNome);


