import Notiflix from 'notiflix';
const form = document.querySelector('.form');

const optios = {
  timeout: 3500,
  clickToClose: true,
};

const onSubmit = e => {
  e.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  const { delay, step, amount } = formValues;
  form.reset();
  for (let i = 0; i < Number(amount); i++) {
    const updatedDelay = Number(delay) + Number(step) * i;
    createPromise(i + 1, updatedDelay)
      .then(result => {
        Notiflix.Notify.success(result, optios);
      })
      .catch(error => {
        Notiflix.Notify.failure(error, optios);
      });
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

form.addEventListener('submit', onSubmit);
