import './style.css';
import validator from 'validator';

const textPlace = document.querySelector('.text-place');
const buttonCheck = document.querySelector('.button');
const seletor = document.querySelector('.values');
const message = document.querySelector('p');

buttonCheck.addEventListener('mouseover', () => {
  buttonCheck.style.backgroundColor = 'black';
});

buttonCheck.addEventListener('mouseout', () => {
  buttonCheck.style.backgroundColor = '#3D3D3D';
  buttonCheck.style.borderColor = 'black';
});

buttonCheck.addEventListener('click', (event) => {
  buttonCheck.style.borderColor = 'white';

  event.preventDefault();

  const campos = {
    creditcard: validator.isCreditCard(textPlace.value),
    hexColor: validator.isHexColor(textPlace.value),
    email: validator.isEmail(textPlace.value),
    lowercase: validator.isLowercase(textPlace.value),
    cep: validator.isPostalCode(textPlace.value, 'BR'),
  };
  message.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});

buttonCheck.addEventListener('clickout', () => {
  buttonCheck.style.borderColor = 'white';
});
