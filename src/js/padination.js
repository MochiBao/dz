import axios from "axios";
import Notiflix from "notiflix";
import _debounce, { debounce } from "debounce";


// const refs = {
//     input: document.querySelector("input"),
//     button: document.querySelector("padination"),
// }


// refs.input.addEventListener("input", debounce(onInput, 1000));
// const posts = fetch(`https://pixabay.com/api?key=35543000-cc8a37d4e982ce557296d34e8&${params}`)
//       .then(response => response.json())
//       .then(json => console.log(json));

// function onInput(e) {
//     const value = e.target.value.trim();
//     const params = new URLSearchParams({
//         per_page: 20,
//         page: 1,
//         q: onInput,
//     });
// };

// const refs = {
//     input: document.querySelector('.input'),
//     result: document.querySelector('.result'),
//     ul: document.querySelector(".ul"),
//   };
  
//   refs.input.addEventListener('input', debounce(inputValue, 1000));

//   function inputValue(e) {
//     const value = e.target.value.trim();
//     const params = new URLSearchParams({
//       q: value,
//       page: 1,
//       per_page: 20,
//   });

//   const posts = fetch(`https://pixabay.com/api?key=35543000-cc8a37d4e982ce557296d34e8&${params}`)
//   .then(Response => Response.json())
//   .then(json => console.log('json :>> ', json));
//   return posts;
//   };

// function createImg(posts) {
//  const markUp = posts.map(({pageURL, tags, downoads, likes}) => {
//     `<ul>
//     <a><img src = "${pageURL}" alt="${tags}"></a>
//     </ul>
//     <div>${downoads}, ${likes}</div>`
//  }).join(" ") 
//  refs.ul.insertAdjacentHTML("beforeend", markUp);
//  return markUp;
// };

//!!!!!!!!!!!
// const refs = {
//     input: document.querySelector('.input'),
//     result: document.querySelector('.result'),
//     more: document.querySelector('.more'),
//     less: document.querySelector(".less"),
//   };

//   let limit = 20;
//   let page = 1;
  

//   refs.input.addEventListener("input", debounce(inputValue, 1000));
  
//   function inputValue(e) {
//     const value = e.target.value.trim();
    
//     const params = new URLSearchParams({
//         q: value,
//         page: 1,
//         per_page: 20,
//     });
  
//       return fetch(`https://pixabay.com/api/?key=35543000-cc8a37d4e982ce557296d34e8&${params}`)
//       .then(Response => Response.json())
//       .then(json => json.hits)
//       .then(data => {
//         createImg(data); 
//         return data;
//       })
//       .catch(error => console.error(error));
//   }
  
//   function createImg(data) {
//     const markUp = data.map(({pageURL, tags, likes, downloads}) => {
//       return `<li>
//                 <a href="${pageURL}">
//                   <img class="gallery-img" src="${pageURL}" alt="${tags}">
//                   <div class="info">Лайки: ${likes} 
//                   Завантаження: ${downloads}</div>
//                 </a>
//               </li>`
//       })
//     .join(' ')
//     refs.result.insertAdjacentHTML("beforeend", markUp)
//     return markUp
//   };

//   refs.more.addEventListener("click", onClick);

//   async function onClick(e) {
//     const pageLimit = 500 / limit;
//     page += 1;
//     if (page <= pageLimit) {

//     };
//   };
  //!!!!!!!!!!!!!!
 
  //         postMarkup(data);
    // if (page <= pageLimit) {
    //           const data = inputValue(page);
    //           createImg(data);
    //       } else {
    //           refs.loadMore.style.display = "none";
    //       };
  // };

 

  
// const refs = {
//     postDiv: document.querySelector(".posts"),
//     loadMore: document.querySelector(".button"),
//     q: document.querySelector(".q"),
// }

// const B_URL = "https://jsonplaceholder.typicode.com/";
// const currentTesourses = "posts";
// let dataLimit = 10;
// let page = 1;

// async function getData(q = " car", page = 1, limit = 10) {
//     const response = await axios.get(`${B_URL}${currentTesourses}? q=${q} _page=${page}&_limit=${limit}`);
// };

// const data =  await response.data;
// return data;

// async function postMarkup(data) {
//     const data = await getData();
//     const markUp = data.map(({title}) => {
//         return `<div> ${title}</div>`
//     }).join(" ");
//     refs.postDiv.insertAdjacentHTML("beforeend", markUp);
// };

// window.addEventListener("load", onLoad);
// async function onLoad(e) {
//     const data = await getData();
//     postMarkup(data);
// }
// refs.loadMore.addEventListener("click", onClick);
// async function onClick(e) {
//     const pageLimit = 100 / dataLimit;
//     page += 1;
//     if (page <= pageLimit) {
//         const data = await getData(page);
//         postMarkup(data);
//     } else {
//         refs.loadMore.style.display = "none";
//     };
// };

// refs.q.addEventListener("input", debounce(onInput, 300));
// async function onInput(e) {
//     const value = e.target.value.trim();
//     if (!value) {
//         Notiflix.Notify.info("Введіть тему");
//         return;
//     };

//     const data = await getData(value)
//     postMarkup(data);
// };


