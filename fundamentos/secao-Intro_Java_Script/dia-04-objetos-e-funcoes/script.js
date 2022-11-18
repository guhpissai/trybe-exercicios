// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// // console.log('Bem vinda, ' + info.personagem);
// info['recorrente'] = "Sim"
// // console.log(info);
// // for (let key in info) {
// //   console.log(key);
// // }
// // for (let key in info) {
// //   console.log(info[key]);
// // }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log("O livro favorito de " + leitor.nome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// EXERICIOS FUNCAO:

function verificaPalindrome(word) {
  for (index in word) {
    if(word[index] = word[(word.length - 1) - index]) {
      return true;
    }
    return false;
    }
}
  console.log(verificaPalindrome("arara"));
  



