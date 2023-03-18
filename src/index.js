import Notiflix from "notiflix";
import createLi from "./js/renderHtml";

const form = document.querySelector(".form");
const list = document.querySelector(".list");
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const {
        "elements": {email, password}
    } = e.currentTarget;

    const markup = createLi(email.value, password.value);
    console.log('murkup :>> ', markup);

    if (email.value === "" && password.value === "") {
        Notiflix.Notify.failure("Введіть дані");
        return;
    }

    Notiflix.Notify.success("Вас додано у список");
    console.log('list :>> ', list);
    list.insertAdjacentHTML("beforeend", markup);


    e.currentTarget.reset();
};