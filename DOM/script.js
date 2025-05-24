let hello = document.getElementById('hello') ;

console.log(hello);

hello.innerHTML = "i'm mohamed";

let hi = document.getElementsByClassName('hello')[1];
hi.innerHTML = 'hello mohamed';

let her = document.querySelectorAll('.hello')[2];
her.innerHTML = 'I know I know';

let body = document.body;
 body.style.backgroundColor = 'lightblue';

let titl = document.title;
titl = "mohamed's page";

// siblings
let first = document.getElementById('first');
first.innerHTML = 'I am the first element';
let second = first.nextElementSibling;
console.log(second);
second.innerHTML = 'I am the second element';
let third = first.nextElementSibling.nextElementSibling;
console.log(third);
third.innerHTML = 'I am the third element';


// thosre are the same chose which you want
let contain = document.getElementById('container');

// Adding styles to the container using element.style.property
contain.innerHTML = '<h1 class="test">Welcome to my page</h1>';
contain.style.backgroundColor = 'lightgreen';
contain.style.width = '60%';
contain.style.textAlign = 'center';
contain.style.borderLeft = '8px solid blue';
contain.style.borderRight = '8px solid blue';

// Adding styles to the container using element style.cssText
contain.style.cssText = `
    background-color: lightgreen;
    width: 60%;
    text-align: center;
    border-left: 8px solid blue;
    border-right: 8px solid blue;
    `

// deleting properties
contain.style.removeProperty('border-right');
