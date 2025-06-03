let blue = document.querySelectorAll('.blue')[0];
let red = document.querySelectorAll('.red')[0];
let green = document.querySelectorAll('.green')[0];
let yellow = document.querySelectorAll('.yellow')[0];


if (localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
}

let lawen = function lawen(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("color", color);
}

blue.onclick = function () { lawen("blue");} 
red.onclick = function () { lawen("red");} 
green.onclick = function () { lawen("green");} 
yellow.onclick = function () { lawen("yellow");} 