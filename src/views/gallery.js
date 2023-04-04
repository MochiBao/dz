import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createLiImg } from "../js/renderHtml";

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