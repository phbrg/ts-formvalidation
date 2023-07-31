/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

const elements = {
    username: document.querySelector(".username"),
    email: document.querySelector(".email"),
    password: document.querySelector(".password"),
    rPassword: document.querySelector(".rPassword"),
    errUsername: document.querySelector(".errUsername"),
    errEmail: document.querySelector(".errEmail"),
    errPassword: document.querySelector(".errPassword"),
    errRPassword: document.querySelector(".errRPassword"),
    btn: document.querySelector("#btn")
};
elements.btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (usernameValidate() === false)
        error("Usuario invalido!", elements.errUsername);
    if (emailValidate() === false)
        error("Email invalido!", elements.errEmail);
    if (passwordValidate() === false)
        error("Senha invalida!", elements.errPassword);
    if (rPasswordValidate() === false)
        error("Senha invalida!", elements.errRPassword);
});
function error(msg, exit) {
    exit.style.display = "block";
    exit.innerHTML = msg;
    setTimeout(() => {
        exit.style.display = "none";
    }, 5000);
}
function usernameValidate() {
    if (elements.username.value.length < 3 || elements.username.value.length > 12)
        return false;
    if (!/^[a-zA-Z0-9]+$/.test(elements.username.value))
        return false;
    return true;
}
function emailValidate() {
    if (elements.email.value.length <= 0)
        return false;
    return true;
}
function passwordValidate() {
    if (elements.password.value.length < 6)
        return false;
    return true;
}
function rPasswordValidate() {
    if (elements.email.value.length <= 0)
        return false;
    if (elements.rPassword.value !== elements.password.value)
        return false;
    return true;
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map