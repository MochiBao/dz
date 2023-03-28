import throttle from "lodash.throttle";

const id = 15;

const LOCAL = "id";

const settings = {
    theme: "black",
    token: "asdadsadad",
    id: "asd",
};

console.log('localStorage.getItem(LOCAL) :>> ', localStorage.getItem(LOCAL));
const row= localStorage.getItem(LOCAL);
const lox = JSON.parse(row);
lox.id = "75";
console.log('lox :>> ', lox);

console.log('row :>> ', row);


localStorage.setItem(LOCAL, JSON.stringify(lox));

// localStorage.removeItem(LOCAL);
// localStorage.clear();

/////// ----------- Приклад ---------
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".input5"),
    textArea: document.querySelector(".textArea"),
};

const FEEDBACK = "feedback";
const value = {};
const item = localStorage.getItem(FEEDBACK);

refs.form.addEventListener("input", throttle(reloadInput, 5000));

function saveValue() {
    if (JSON.parse(item)) {
        refs.input.value = JSON.parse(item).email;
        refs.textArea.value = JSON.parse(item).message;
    };
    return;
};

saveValue();

function reloadInput(e) {
    value[e.target.name]  = e.taget.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(value));
};

refs.form.addEventListener("submit", removeItem);
function removeItem(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK)
};