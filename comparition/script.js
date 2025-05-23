let x = 'mohamed';
let y = 'mohamed';
let z = 'ahmed';
console.log( x == y); 
console.log( x == z); 


// compar
let userCode = prompt('enter the code');
let code = 'azer125' ;
userCode = userCode.toLowerCase().trim();
if (userCode == code) {
    console.log( 'the code is correct ');
}else {
    console.log( 'the code is incorrect ');
}

// compar type
let num1 = 5;
let num2 = '5';
console.log( num1 == num2); // true
console.log( num1 === num2); // false
