import * as dayjs from 'dayjs';
import * as localizedFormat from "dayjs/plugin/localizedFormat";
// import "dayjs/locale/ru";
const dayJSObj = dayjs();
console.log(dayJSObj.format("dddd/MMMM/YYYY H:m:s A"));



// const date = new Date();
// // console.log('date :>> ', date.getDate());
// // console.log('date :>> ', date.getDay());
// // console.log('date :>> ', date.getMonth());
// // console.log('date :>> ', date.getFullYear());

// const nextMeet = new Date("March 25 2023 13:00:00");
// console.log('nextMeet :>> ', nextMeet);


// console.log(date.getUTCDate());
// console.log(date.getUTCFullYear());
// console.log(date.getUTCMilliseconds());

