export default function () {
  let main = document.createElement('div'),
    inputDiv = document.createElement('div'),
    leftInput = document.createElement('input'),
    rightInput = document.createElement('input'),
    result = document.createElement('p'),
    p = document.createElement('p'),
    buttonDiv = document.createElement('div'),
    buttonAction = ['+', '-', '*', '/'];

  leftInput.id = 'left-input';
  rightInput.id = 'right-input';
  result.id = 'result';
  p.innerHTML = '<span> Your result: </span>';

  for (let i = 0; i < buttonAction.length; i++) {
    let button = document.createElement('button');

    button.className = 'btn-action';
    button.innerHTML = buttonAction[i];
    buttonDiv.appendChild(button);
  };

  main.className = 'main';
  inputDiv.className = 'main-input';
  buttonDiv.className = 'main-button';

  inputDiv.appendChild(leftInput);
  inputDiv.appendChild(rightInput);
  main.appendChild(inputDiv);
  main.appendChild(p);
  main.appendChild(result);
  main.appendChild(buttonDiv);
  document.body.appendChild(main);
};