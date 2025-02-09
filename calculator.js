let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function percentage() {
  let display = document.querySelector('.js-display');

  calculation = (parseFloat(calculation) / 100);
  display.value = calculation;
  displaycalculate();
}

function incrementCalculation(value) {
  calculation += value;
  displaycalculate();

  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function deleteDigit() {
  calculation = document.querySelector('.js-display')
    .value = calculation.slice(0, -1);

  displayTyping();
}

function displaycalculate() {
  document.querySelector('.js-display')
    .value = calculation;
  displayTyping();
}

function displayTyping(value) {
  const result = document.querySelector('.js-result');
  const display = document.querySelector('.js-display');

  try {
    result.textContent = eval(display.value) || '';
  } catch (e) {
    result.textContent = value;
  }
}

function enlarge() {
  const enlarge = document.querySelector('.js-enlarge');
  if (enlarge.innerHTML === 'S') {
    enlarge.innerHTML = 'L';

  } else {
    enlarge.innerHTML = 'S';
  }
}

document.querySelector('.js-theme-toggle')
  .addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    document.querySelector('.container')
      .classList.toggle('light-mode');

    document.querySelector('.text')
      .classList.toggle('light-mode');

    document.querySelector('.display')
      .classList.toggle('light-mode');

    document.querySelector('.js-theme-toggle')
      .classList.toggle('theme-color-light-mode');

    document.querySelectorAll('button')
      .forEach((button) => {
        button.classList.toggle('light-mode');
      });
  });