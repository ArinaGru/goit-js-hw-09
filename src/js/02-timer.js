import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';
// ---------------------REFS---------------
const refs = {
  input: document.querySelector('#datetime-picker'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  field: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),
  btnStart: document.querySelector('[data-start]'),
};
let selectedDate;
let intervalId = null;
refs.btnStart.disabled = true;
refs.input.disabled = false;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 3500,
        clickToClose: true,
      });
    } else {
      refs.btnStart.disabled = false;
      selectedDate = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
// ---------------------STYLES---------------
refs.timer.style.display = 'flex';
[...refs.field].map(item => {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.alignItems = 'center';
  item.style.marginRight = '15px';
});
[...refs.value].map(item => {
  item.style.fontSize = '40px';
});
[...refs.label].map(item => {
  item.style.textTransform = 'uppercase';
});
// ----------------------FUNCTINS-------------------
function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  renderText({ days, hours, minutes, seconds });
}
const timer = targetDate => {
  intervalId = setInterval(() => {
    refs.btnStart.disabled = true;
    refs.input.disabled = true;
    const delta = new Date(targetDate) - new Date();
    if (delta <= 0) {
      clearInterval(intervalId);
      refs.input.disabled = false;
      return;
    }

    convertMs(delta);
  }, 1000);
};

const renderText = ({ days, hours, minutes, seconds }) => {
  refs.days.innerHTML = days;
  refs.hours.innerHTML = hours;
  refs.minutes.innerHTML = minutes;
  refs.seconds.innerHTML = seconds;
};
refs.btnStart.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  timer(selectedDate);
});
