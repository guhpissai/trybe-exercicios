const isEmpty = (value1, value2) => {
  if (value1.length < 1 || value2.length < 1) {
    throw new Error('Preencha os campos');
  }
  return
}

const isNumber = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Insira apenas numeros');
  }
  return
}

function sum() {
  let result = document.getElementById('result');
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    isNumber(value1, value2);
    isEmpty(value1, value2);
    result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    result.innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}