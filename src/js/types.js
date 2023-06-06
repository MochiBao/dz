// //примітиви порівнюються за значенням.
// import axios from "axios";

// const num = 7; 
// const num1 = 7;

// console.log(num === num1);

// //об'єкти порівнюються за посиланням (створюється "ячейка" в пам'яті, і вони не можуть бути однаковими).
// const person = {
//     name: "Artem",
//     phone: 1231233132,
//     bane: {
//         lon: 2934,
//         lat: 1233
//     },
// };

// const person1 = {
//     name: "Artem",
//     phone: 1231233132
// };
// //Копія об'єкту 
// const strPr = JSON.stringify(person);
// const person3 = JSON.parse(strPr); 
// person3.name = "Petro";
// const person2 = {...person, person1} //копія об'єкту



// const strPerson = JSON.stringify(person);//
// const strPerson1 = JSON.stringify(person1);//
// console.log(person === person1);
// // console.log(strPerson = strPerson1);



// let a = null;
// console.log(a);
// a = 10;

// console.log(a);

// const b = "2";

// const c = 2;

// console.log(b == c); //порівнюється тільки за значенням.
// console.log(b ===c); //порівнється за значенням і за типом.

// //замикання - функція у функції.

// function culcPlus(n) {
//     return function op(num) {
//         console.log(n, num);
//         console.log(n + num);
//     };
// };

// const calk = culcPlus(5);

// calk(10);
// calk(20);
// calk(30);



// function makeQrCodes(domen) {
//     return function qr(url) {
//         return `https://${url}.${domen}`
//     };
// };

// const dotCom = makeQrCodes("com");
// const dotUa = makeQrCodes("ua");


// console.log(dotCom("google"));
// console.log(dotCom("rozetka"));

// // const func = () => {
// //     console.log("fdsfdsffsdffs");
// // };

// // console.log(func());
// // console.log(typeof func);
// // Array.isArray(func);

// const func = (...arguments) => {
//     return a + b
// };

// func(1, 2);

// function funct(q, b, c) {
//     console.log("1"); //hoisting - ця функція може використовуватися в будь-якому місці.
//     const argumentsArr = Array.from(arguments);
//     console.log(argumentsArr);
//     console.log(a+b+c);
// };

// funct(1, 2, 3);
// const nummm = [1, 2, 3, 4, 5];

// console.log(Array.isArray(nummm)); //перевірка на масив.

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [6, 7, 8, 9, 10];

// const mapArr = arr.map((num, index, arr)  => {
//     console.log(num, index, arr);
// });

// console.log(mapArr);

// const filterApp = arr.filter(num => num >= 3);
// console.log(filterApp);

// const sortApp = arr.sort((a, b) => {
//     b + a //від найменшого до найбільшого.
//     b - a //від найбільшого до найменшого.
// });

// console.log(sortApp);
// const arr3 = arr.concat(arr1);
// console.log(arr3);

// const arr4 = [...arr, ...arr1];
// arr4.push(11);

// ///////

// function math(x,y) {
//     //x - число, яке множимо саме на себе.
//     //y - число, скільки разів ми будемо множити число саме на себе.
//     let count = 1;
//     for (let index = 0; index < y; index++) {
//         console.log(count);
//         count = count * x;
//     };
//     return count;
// };

// math(2,2);


// function math1(x, y) {

//     // return result = y == 1 ? x : x * math1(x, y - 1); - тернарний оператор.
    
//     if (y == 1) {
//         return x;
//     } else {
//         return x * math1(x, y - 1)
//     };
// };

// console.log(math1(2,2));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         throw new Error ("помилка")}).
//       catch(rej => console.log(rej)).
//       finally(finaly => console.log("clg"));

// async function fe() {
//     try {
//         const data =await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const arr = data.json();
//         return arr;
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// fe();

// const funcc = async() => {
//     try {
//         const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//         return data.data;
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// console.log(func());
// const markUp = async() => {
//     const data = await func();
//     console.log(data);
// };

// markUp();

// async function response() {
//     const data = await axios.get("https://jsonplaceholder.typicode.com/photos");
//     const response = data.data;
//     console.log(response);
//     return response;
// };

// response();

const refs = {
   form: document.querySelector(".form"),

};
console.log(refs.form);
refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const {elements: {input, input1} } = e.currentTarget;
    console.log(input.value, input1.value);
   if (!input.value || !input1.value) {
    console.log("Введіть значення");
    return;
   };
   refs.form.reset();
};
///////////
const refs1 = {
    input: document.querySelector(".text-input")
};

const onInput = (e) => {
    const value = e.target.value;
    console.log(value);
};

refs1.input.addEventListener("input", onInput);

/////////////

document.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
    console.log(e.code);
    console.log(e.key);

    if (e.code == "KeyZ" &&  (e.ctrlKey || e.metaKey)) {
        console.log("Відмінити останнню дію");
    };
};

