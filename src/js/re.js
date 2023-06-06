const refs = {
    textField: document.querySelector(".textareaItem"),
    counter: document.querySelector(".counter span"),

    div: document.querySelector(".div"),
};

const limit = textField.getAttribute(".maxlenght");
refs.counter.innerHTML = limit;

refs.textField.addEventListener("keyup", onKeyUp);
refs.textField.addEventListener("keydown", onKeyDown);

function onKeyDown(params) {
   if (e.repeat) {
     onKeyUp()
   };
};

function onKeyUp(e) {
    const limitText = limit - textField.value.trim().length;
    refs.counter.innerHTML = limitText;
};

refs.div.addEventListener("dblclcik", onDblclick);
refs.div.addEventListener("contextmenu", onContextMenu);

function onContextMenu(e) {
    e.preventDefault()
    console.log(e);
};


function onDblclick(e) {
    console.log(e);
};

window.addEventListener("scroll", onScroll);

function onScroll(e) {
    console.log(`${Math.round(scrollY)} px`);
}