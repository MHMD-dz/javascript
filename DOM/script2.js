// create the elements
let  confintain = document.createElement('div');
let h11 = document.createElement('h1');

// create text nodle
let textN = document.createTextNode('Hello world');
// append
h11.appendChild(textN);
confintain.appendChild(h11);

confintain.style.cssText = `
    background-color: lightgreen;
    width: 60% ;
    font-size: bolder;
    text-align: center;
    border-left: 8px solid blue;
    border-right: 8px solid blue;
    color: blue;`

document.body.style.cssText = `
    background-color: lightblue;
    width: 100%;
    display: flex;
    justify-content: center;
`;
    
document.body.appendChild(confintain);



