const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (correcao, respostas) => {
  if (correcao === respostas) {
    return 1;
  } if (respostas === 'N.A') {
    return 0;
  } return -0.5;
};

const checkPoints = (correcao, respostas, callback) => {
  let finalPoints = 0;
  for (let index = 0; index < correcao.length; index += 1) {
    const returning = callback(correcao[index], respostas[index]);
    finalPoints += returning;
  }
  return `O resultado e ${finalPoints}`;
};

console.log(checkPoints(STUDENT_ANSWERS, RIGHT_ANSWERS, compare));


