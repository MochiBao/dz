// console.log(1);

// setTimeout(()=> {
//     console.log(2);
// }, 0);

// console.log(3);

const refs = {
    seconds: document.querySelector("#clock")
}
const timeout = setTimeout(() => {
console.log("реклама");
}, 10000);

console.log('timeout :>> ', timeout);
clearTimeout(timeout);



function console(params) {
    console.log('1 :>> ', 1);
};
setInterval(console(), 1000);


let seconds  = 0;
const timer = setInterval(() => {
    seconds++;
    refs.seconds.innerHTML = `Ви вже знаходитесь на нашому сайті ${seconds} секунд`;
}, 1000);

console.log('timer :>> ', timer);
clearInterval(timer);





