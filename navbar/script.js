let openn = document.getElementsByClassName('open')[0];
let closee = document.getElementsByClassName('close')[0];
let contain = document.getElementsByClassName('divv')[0];

closee.onclick = function hi() {
    contain.classList.add("hide");
    closee.classList.add("hide");
    openn.classList.remove("hide");
}
openn.onclick = function hello() {
    contain.classList.remove("hide");
    closee.classList.remove("hide");
    openn.classList.add("hide");
}
