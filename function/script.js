
let namez = prompt("Enter your name:");
function helloUser( name ) {
    console.log( `Hello, ${name} !` );
}
helloUser( namez );


function calculAge(age) {
    console.log (age * 364);
}
calculAge( 20 );

function calc( ...numbers) {
    let s = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    console.log(s);
}

// mini function
let x = (nember) => {return number};