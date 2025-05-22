let names ;
names = ['mohamed', 'amine', 'walaa', 'laila', 'nora'];
console.log(names);
names[4] = 'meriem' ;
for (let index = 0; index < names.length; index++) {
    console.log(names[index] + ' is a nember ' + index);
    
}

let numbrs = [1, 2, 3, 4, 5, 6, [7, 8, 9]];
console.log(numbrs[6][2]); // 9


// adding new element
names.push('hasnaa'); // add to the end
console.log(names);
names.unshift('asmaa'); // add to the start
console.log(names);

// removing element
names.pop(); // remove from the end
console.log(names);
names.shift(); // remove from the start
console.log(names);

// splica (start, delete count, add , add, add)
names.splice(2, 1, 'asmaa', 'hasnaa', 'walaa'); // remove 1 element from index 2 and add 3 elements
console.log(names);

// slice (start, end) // copy
let newNames = names.slice(2, 5); // copy from index 2 to index 5
console.log(newNames);