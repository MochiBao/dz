// const refs = {
//     textField: document.querySelector(".textareaItem"),
//     counter: document.querySelector(".counter span"),

//     div: document.querySelector(".div"),
// };

// const limit = textField.getAttribute(".maxlenght");
// refs.counter.innerHTML = limit;

// refs.textField.addEventListener("keyup", onKeyUp);
// refs.textField.addEventListener("keydown", onKeyDown);

// function onKeyDown(params) {
//    if (e.repeat) {
//      onKeyUp()
//    };
// };

// function onKeyUp(e) {
//     const limitText = limit - textField.value.trim().length;
//     refs.counter.innerHTML = limitText;
// };

// refs.div.addEventListener("dblclick", onDblclick);
// refs.div.addEventListener("contextmenu", onContextMenu);

// function onContextMenu(e) {
//     e.preventDefault()
//     console.log(e);
// };


// function onDblclick(e) {
//     console.log(e);
// };

// window.addEventListener("scroll", onScroll);

// function onScroll(e) {
//     console.log(`${Math.round(scrollY)} px`);
// };

/////

const dev = document.createElement("ul"); //створення чогось в DOM-дереві
for (let index = 0; index < 5; 0++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Привіт";
    console.log(listItem);
    dev.appendChild(listItem);
};

console.log(dev);
console.log(document);

const body = document.body;

body.append(dev);



const arr = [1, 2, 3, 4, 5];
const markup = arr.map(number => {
   return `<li>${number}</li>`
}).join("");

dev.innerHTML = markup;
dev.insertAdjacentElement("beforeend", markup);

