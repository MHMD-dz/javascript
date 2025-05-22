let name = 'mohamed ';

console.log(name.repeat(4));
console.log(name.length);
console.log(name[0]+name[2]+name[4]+name[6]);
console.log(name.indexOf('d'));

// search
console.log(name.indexOf('m')); // first occurance
console.log(name.indexOf('m',2)); // start searching from index 2
console.log(name.lastIndexOf('m')); // last occurance
console.log(name.includes('m')); // return true or false
console.log(name.includes('m',2)); // start searching from index 2
console.log(name.startsWith('m')); // return true or false we can add start number
console.log(name.endsWith('d')); // return true or false we can add start number

// slice
console.log(name.slice(0,4) + name.slice(4));//  acssept nigatif number to revers slicing
console.log(name.substring(0,4) + name.substring(4)); // same but not accept nigatif number
console.log(name.substr(0,4) + name.substr(4)); // accept start and length



// split as array
name = 'mohamed hello i hate js its so boring';
console.log(name.split(' ')); // split by space