// escreva sum abaixo
const sum = (...rest) => rest.reduce((acc, curr) => acc + curr, 0);

console.log(sum(4, 5, 6));