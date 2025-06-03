

localStorage.hi = "Hello World";

console.log(localStorage.getItem("hi")); // Output: Hello World
console.log(localStorage.hi); // Output: Hello World

localStorage.setItem("hi", "Hello World 2"); // Update the value

// pr
let hello = document.getElementsByClassName('hii')[0];

hello.value = localStorage.getItem('hii') || '';

hello.onkeyup = function hii() {
    localStorage.setItem("hii", hello.value);
}