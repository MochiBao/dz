const obj = {
    name: "j",
};

console.log(Object);

console.log(obj);

const arr = [1, 2, 3, 4, 56, 6, 7, 7, 6, 5, 4];

const arr1 = [...arr];

arr1.slice(1, 7);
arr1.splice(1, 7);


const filter = arr.filter(num => num < 7).sort((a,b) => a-b);

const doubles = [...new Set(filter)];

console.log(Array.isArray(doubles));

const find = arr.find(num => {
    return num = 56;
});

console.log(find);

arr.forEach(num => {
   console.log(num + 2);
});

const findIndex = arr.findIndex(num => num = 4);

const calc = arr.reduce((prev, num) => {
    // return prev * num;
    // let numm = prev.push(num)
    return [...prev, num]
}, []);

console.log(calc);

const every = arr.every (num => num = 4);
console.log(every);

const some  = arr.some (num => num = 7);
console.log(some);

((y, x) => {
console.log(y + x);
});(5, 2); //анонімна функція

window.addEventListener("scroll", e => {
    console.log(e);
});