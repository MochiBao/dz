import { galleryItems } from "./imgs";

function createLi(email, password) {
    const markup = `<li> Email: ${email}, Password: ${password}</li>`;
    return markup;
  }
  
  function createLiFromStorage(VALUES_KEY) {
    if (localStorage.getItem(VALUES_KEY)) {
      const values = localStorage.getItem(VALUES_KEY);
      const parseValue = JSON.parse(values);
  
      const item = parseValue
        .map(({ email, password }) => {
          const markupMap = `<li> Email: ${email}, Password: ${password}</li>`;
  
          return markupMap;
        })
        .join(' ');
      return item;
    }
    console.log(item);
    
  }
  
  export { createLi, createLiFromStorage, createLiImg};

  function createLiImg(images) {
    console.log(galleryItems);

    const galery = galleryItems.map(({preview, original, description}) => {
      return `<div class = "galleryItem">
      <a class = "gallery=link" href = "${original}">
      <img src = "${preview}" class = "gallery-img" alt = "${description}">
      </a>
      </div>`
    }).join(' ');
  };

  const refs = {
    list: document.querySelector(".list"),
  };

  refs.list.insertAdjacentHTML("beforeend", createLiImg);
  createLiImg();

  let Lightbox = new SimpleLightbox(".list a", {
    captionsData: 'alt',
    captionDelay: "250ms",
    animationSpeed: "500ms"
  });