// import { createLi, createLiFromStorage } from './js/renderHtml';

// import Notiflix from 'notiflix';

// const form = document.querySelector('.form');
// const list = document.querySelector('.list');

// form.addEventListener('submit', onSubmit);

// const VALUES_KEY = 'values';

// const values = [];

// function onSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: { email, password },
//   } = e.currentTarget;

//   values.push({ email: email.value, password: password.value });

//   localStorage.setItem(VALUES_KEY, JSON.stringify(values));

//   const markup = createLi(email.value, password.value);

//   if (email.value === '' && password.value === '') {
//     Notiflix.Notify.failure('Введіть данні');
//     return;
//   }

//   Notiflix.Notify.success('Вас додано у список');

//   list.insertAdjacentHTML('beforeend', markup);

//   e.currentTarget.reset();
// }

// const fromLocal = createLiFromStorage(VALUES_KEY);

// list.insertAdjacentHTML('beforeend', fromLocal);

// // const LOCAL = "markup";
// //     const item = localStorage.getItem(LOCAL);
// //     const lox = JSON.parse(item);
// //     const hz = localStorage.setItem(LOCAL, JSON.stringify(markup));

const LOCAL_KEY = "USER";
const obj = {
    name: "Lox",
    age: 100,
};

localStorage.setItem(LOCAL_KEY, JSON.stringify(obj));
const storageObj = localStorage.getItem(LOCAL_KEY);
const parseObj = JSON.parse(storageObj);
parseObj.age = 30;
localStorage.setItem(LOCAL_KEY, JSON.stringify(parseObj));
