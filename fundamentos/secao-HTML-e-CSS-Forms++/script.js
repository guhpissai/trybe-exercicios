window.onload = function () {
  const agreement = document.getElementById('agree');
  agreement.addEventListener('change', enable);
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});

const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email');
const whyYou = document.getElementById('why-you');

let validation = () => {
  if (userName.value.length < 10 || userName.value.length > 40) {
    alert('Dados inválidos');
  } else if (userEmail.value.length < 10 || userEmail.value.length > 50) {
    alert('Dados inválidos');
  } else if (whyYou.value.length > 500) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

submitButton.addEventListener('click', validation)

let enable = () => {
  const agreement = document.getElementById('agree');
  submitButton.disabled = !agreement.checked;
}


