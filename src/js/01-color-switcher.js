
const start = document.querySelector('button[data-start]');
const end = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let currentColor;
let setID;

  start.addEventListener('click', () => {
    start.disabled = true;
    body.style.backgroundColor = getRandomHexColor();
    currentColor = getRandomHexColor();
    // 18 - 19 рядок - миттєвий 1-й запуск кольору
    
    // 22-26 рядок - всі інші запуски. 
    setID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        currentColor = body.style.backgroundColor;
        console.log(currentColor);
    }, 1000);
  });

  end.addEventListener('click', () => {
    start.disabled = false;
    body.style.backgroundColor = currentColor;
    clearTimeout(setID);
  });
