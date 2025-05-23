//for (let index = 0; index <= 10; index++) {
//    console.log("hello world " + index)    
//}


let array = [ 'mohamed' , 'walaa' , 'fekir' , 'amine' , 'laila' , 'liliane' , 'hasnaaa' , 'meriem']
console.log(array.length);
for (let index = 0; index < array.length; index++) {
    console.log( array[index] + " is nember :"+ index) ;
    
}


// part 2 
let moyarray = [10.10 , 12.5 , 15.5 , 18.5 , 20.0 , 19.0 , 17.5 , 16.0]
let isMale = [ true , true , true , true , false , false , false , false ]
for (let index = 0; index < array.length; index++) {
    if (isMale[index]) {
        console.log( array[index] + " his Avrege is :"+ moyarray[index]) ;
        
    }else {
    console.log( array[index] + " her Avrege is :"+ moyarray[index]) ;}
    
}

// part 3
let carArray = [ 'mercedes' , 'bmw' , 'audi' , 'ford' , 'fiat' , 'toyota' , 'honda' , 'nissan'] ;
let carModel = [ 2000 , 2001 , 2002 , 2003 , 2004 , 2005 , 2006 , 2007] ;
let carColor = [ 'red' , 'blue' , 'green' , 'black' , 'white' , 'yellow' , 'purple' , 'orange'] ;

for (let i = 0; i < carArray.length; i++) {
    console.log(`the car name is :  ${carArray[i]} `);
    console.log('the car models are : ' );
    for (let j = 0; j < carModel.length; j++) {
    console.log(carModel[j]);
    }
    console.log('the car colors are : ' );
    for (let k = 0; k < carColor.length; k++) {
    console.log(carColor[k]);
    }
    console.log('----------------------------------');
}