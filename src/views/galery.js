import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createLiImg, createFilters } from '../js/renderHtml';

const refs = {
  filters: document.querySelector('.filters'),
  list: document.querySelector('.list'),
};

refs.filters.insertAdjacentHTML('beforeend', createFilters());
refs.list.insertAdjacentHTML('beforeend', createLiImg());

refs.filters.addEventListener('click', filter);

function filter(e) {
  // console.log(e.target.nodeName === "LI");
  if (e.target.nodeName === "LI") {
    e.preventDefault();
    e.target.classList.toggle('active');

    refs.list.innerHTML = '';

    const filterValue = e.target.textContent.trim();

    refs.list.insertAdjacentHTML('beforeend', createLiImg(filterValue));
  };

  
};

let lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});

let arr4 = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]].flat(Infinity);
console.log('arr4 :>> ', arr4);