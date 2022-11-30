const hiring = (name) => {
  const email = name.split(' ');
  const newEmail = email.join('_');

  return `${newEmail.toLowerCase()}@trybe.com` 
};

const newEmployees = () => {
  const employees = {
    id1: hiring('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: hiring('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: hiring('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());