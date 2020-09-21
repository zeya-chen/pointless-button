const press_button = document.querySelector('.click-me');
let count = 0;
let text = 'Press Me :D';
press_button.innerText = text;
function add(event) {
  count = count + 1;
  press_button.innerText = count;
}

press_button.addEventListener('click', add);
