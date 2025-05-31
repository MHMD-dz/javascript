let btn = document.querySelectorAll('button')[0];
let btn2 = document.querySelectorAll('button')[1];

onscroll = function(){

    if (scrollY > 100) {
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
    if (scrollX > 300) {
        btn2.style.display = 'block';
    }else{
        btn2.style.display = 'none';
    }
}


btn.onclick = function(){
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


    

btn2.onclick = function ( ){
    scrollTo({
        left: 0,
        behavior: 'smooth'
    })
}