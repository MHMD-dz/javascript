let btn = document.getElementById("btn");

// btn.onclick = function() { document.body.style.backgroundColor = "lightgreen";}


function hello() {
    console.log("Hello, world!");
    btn.style.backgroundColor = "lightcoral";
    btn.style.color = "white";
    btn.style.border = "2px solid darkred";
    btn.style.padding = "10px 20px";
    document.body.style.backgroundColor = "lightblue";
    btn.innerHTML = "Clicked!";
}




// btn.addEventListener("click", hello);
