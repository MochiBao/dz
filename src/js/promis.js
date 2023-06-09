const { default: axios } = require('axios');

const yep = user => {
  return (promisee = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(`${user} отримує шоколадка`);
      } else {
        reject('отримали оцінку нижче 8');
      }
    }, 2000);
  }));
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('шоколадка');
    } else {
      reject('отримали оцінку нижче 8');
    }
  }, 2000);
})
  .then(item => console.log(item))
  .catch(err => console.log(err))
  .finally(() => console.log('проміси гуд'));

yep('user')
  .then(user => console.log(user))
  .catch(err => console.log(err));

const func = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const resolveProm = (text) => {
  return new Promise (resolve => {
    setTimeout(() => resolve(text), 1000)
  })
};

const promiseA = resolveProm("PromiseA");
const promiseB = resolveProm("PromiseB");
const promiseC = resolveProm("PromiseC");
const promiseD = resolveProm("PromiseD");


Promise.all([promiseA, promiseB, promiseC, promiseD])
  .then(
  response => console.log(response)
  .catch(
  err => err.status
  )
);

//повертає всі проміси

Promise.race([promiseA, promiseB, promiseC, promiseD])
  .then(
  response => console.log(response)
);

//повертає той проміс, що виконався найшвидше

new Promise(resolve => resolve("Все добре")).then(
  response => console.log(response)
);

//повертає позитивний результат

new Promise(reject => reject("Все погано")).then(
  response => console.log(response)
);

// повертає негативний результат 








// ----------------------------------------

const BASE_URL = 'https://restcountries.com/v3.1';
const NeededFIELDS = '?fields=name,capital,population,flags,languages';
export default class NewClass {
  constructor() {
    this.value = '';
  }
  fetchCountries() {
    return fetch(`${BASE_URL}/name/${this.value}${NeededFIELDS}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => {
        console.log('err');
      });
  }

  get val() {
    return this.value;
  }

  set val(newVal) {
    this.value = newVal;
  }
}

const newClass = new NewClass();

console.log(newClass.fetchCountries());