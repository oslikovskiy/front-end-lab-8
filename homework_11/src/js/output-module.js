import calculatorPage from './interface-module';
import calculator from './calculating-module';
import "../styles/styles.css";

calculatorPage();
let leftInput = document.getElementById('left-input'),
  rightInput = document.getElementById('right-input'),
  result = document.getElementById('result'),
  buttons = document.getElementsByClassName('btn-action'),
  i = 0;

for (i; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (elem) {
    let left = leftInput.value,
      right = rightInput.value,
      action = elem.target.innerHTML;

    result.innerHTML = calculator(left, right, action);
  });
};