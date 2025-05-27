
function createCart( title , paragraphh) {
    let container = document.createElement('div');
    let titel = document.createElement('h1');
    let paragraph = document.createElement('p');
    let image = document.createElement('img');

    titel.textContent = title;
    paragraph.textContent = `${paragraphh} years old`;
    image.src = 'octa.png';
    container.appendChild(titel);
    container.appendChild(paragraph); 
    container.appendChild(image);
    document.body.appendChild(container);

    image.style.cssText = `
        width: 200px;
        height: 200px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: rgb(61, 255, 223);
    `;
    container.style.cssText = `
        width: 300px;
        height: 400px;
        background-color: rgb(0, 255, 149);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        display: flex ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 10px;
    `;
}

let titles = ['Mohamed', 'Laila', 'Yelina ', 'Abdallah', 'Lilian', 'Hassan' , 'Meriem' , 'Walaa'];
let paragraphs = [ 22 , 20 , 23 , 23 , 21 , 22 , 21 , 22 ] ;

document.body.style.cssText = `
    background-color:rgb(0, 255, 234);
    hight: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
for (let i = 0; i < titles.length; i++) {
    createCart(titles[i], paragraphs[i]);
}



