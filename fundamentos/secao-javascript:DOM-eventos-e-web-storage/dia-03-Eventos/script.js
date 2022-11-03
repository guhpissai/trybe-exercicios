const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}


createDaysOfTheWeek();

  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfTheMonth () {
    let getDaysList = document.getElementById('days');
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      let day = decemberDaysList[index];
      let dayItem = document.createElement('li');
      if (day === 24 || day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 04 || day === 11 || day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday'
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
    }
  }
  createDaysOfTheMonth ();

  const createButton = (buttonName) => {
    let buttonContainer = document.querySelector(".buttons-container");
    let newButton = document.createElement('button');
    let newButtonid = 'btn-holiday';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonid;
    buttonContainer.appendChild(newButton);
  }

  createButton ('Feriados');

  const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
      getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays();

  let createButtonFriday = (day) => {
    let getButtonContainer = document.querySelector(".buttons-container");
    let newButtonFriday = document.createElement("button");
    let buttonFridayId = "bnt-friday";
    newButtonFriday.innerHTML = day;
    newButtonFriday.id = buttonFridayId;
    
    getButtonContainer.appendChild(newButtonFriday);
  }

  createButtonFriday("Sexta-Feira");

const changeFridayText = (fridayArray) => {
  let getFridayButton = document.querySelector("#bnt-friday")
  let getFridayDays = document.querySelectorAll(".friday");
  let setFridayText = "It's Friday Day";

  getFridayButton.addEventListener("click", () => {
    for (let index = 0; index < getFridayDays.length; index += 1) {
      if (getFridayDays[index].innerHTML !== setFridayText) {
        getFridayDays[index].innerHTML = setFridayText;
      } else {
        getFridayDays[index].innerHTML = fridayArray[index];
      }
    }
  });
}

let decemberFriday = [4, 11, 18, 25];
changeFridayText(decemberFriday);




// Escreva seu código abaixo.
