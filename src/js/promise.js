// // const value = true;

import axios from "axios";


// // const promise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         if (value ) {
// //             resolve("Відповідь є")
// //         } else {
// //             reject ("Відповіді немає")
// //         }
// //     },1000)
// // });

// // promise.then(value => console.log('value :>> ', value)).catch(err => console.log('err :>> ', err)).finally(history.push(index.html));


// const yep = (user) => {
//     console.log('user :>> ', user);
//     return (promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 8) {
//                 resolve(`${user} отримав шоколадку`);
//             } else {
//                 reject("Отримали оцінку нижче 8")
//             }
//         }, 2000
//         );
//     }));
// };

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() < 8) {
//             resolve("шоколадка");
//         } else {
//             reject("Отримали оцінку нижче 8")
//         }
//     }, 2000
//     );
// }).then(choco => console.log("шоколадка"))
//     .catch(err => console.log(err))
//     .finally(() => console.log("Привіт")); 
// // then - приймає позитивий результат; cathc - негативний; finally - все;

// yep("user").then(user => console.log(user)).catch(err => console.log(err));
// console.log('promise :>> ', promise);


// const func = async () => {
// try {
//     const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/"
//     );
//     console.log(response.data);
// } catch (error) {
//     console.log(error);
// };
// };

// func();

const list = document.querySelector(".list");

const func  = async () => {
    try {
        const photos = await axios.get(
            "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        return photos.data;
    } catch (error) {
        console.log(error);
    };
};

console.log('object :>> ', func());

const renderPhotos = async () => {
    const photos = await func();
    const photo = photos.map(photo => `<img src="${photo.url}" alt="">`);
    list.insertAdjacentHTML("beforeend", photo);
    return photo;
};

console.log('object :>> ', renderPhotos());

