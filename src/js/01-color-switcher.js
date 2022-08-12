const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
refs.btnStop.disabled = true;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function setBodySyle() {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
}

function start() {
  intervalId = setInterval(setBodySyle, 1000);
  refs.btnStop.disabled = false;
  refs.btnStart.disabled = true;
}

function stop() {
  clearInterval(intervalId);
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}
refs.btnStart.addEventListener('click', start);
refs.btnStop.addEventListener('click', stop);
