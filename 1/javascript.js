console.log(+"5" + +"8");
console.log( Number("5") + Number("10") );
console.log(parseInt("5") + parseInt("10.5") );
console.log(parseFloat("5") + parseFloat("10.5") );
// math
console.log(Math.abs(-5));
console.log(Math.sqrt(155));
console.log(Math.pow(5, 3));
console.log(Math.max(5, 10, 15));
console.log(Math.min(5, 10, 15));   
console.log(Math.round(11.5));
console.log(Math.floor(11.7));
console.log(Math.ceil(11.1));

// 
let i = 0 ;
function hi() {
    console.log(`I love her a ${i++} times`);
    if (i == 15) {
        clearInterval(y);
        return console.log("I love her more than anything in the world");
        
    }
}
let y = setInterval(hi , 1000);