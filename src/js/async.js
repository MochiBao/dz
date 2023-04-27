import axios from "axios";

const refs = {
  seconds: document.querySelector('#clock'),
};

const timeout = setTimeout(() => {
  console.log('Реклама');
}, 10000);

console.log(timeout);

clearTimeout(timeout);

let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  refs.seconds.innerHTML = `Ви вже знаходитись на нашому сайті ${seconds} секунд`;
}, 1000);

console.log(timer);

clearInterval(timer);

// fetch("https://restcountries.com/v3.1/all",{
// method: "post",
// }
// );

axios.post("url", {name: "blallsa", password: "blablabla"} );