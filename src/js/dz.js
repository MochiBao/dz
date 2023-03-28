const form = {
    form: document.querySelector(".form"),
    input: document.querySelector(".input"),
    input1: document.querySelector(".input1"),
    ul: document.querySelector(".list"),
};

const LOCAL = "feedback";
const value = {};
const item = localStorage.getItem(LOCAL);