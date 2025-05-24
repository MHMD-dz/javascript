let car = {
    name: 'mercides',
    model: 2025 ,
    color: 'red',
    price: 20000,
    isAvailable: true,

    toString: function() {
        console.log(`
            Car Name: ${this.name} \n
            Car Model: ${this.model} \n
            Car Color: ${this.color} \n
            Car Price: ${this.price} \n
            Car is Available: ${this.isAvailable}`);
    }
}

let user = {
    // attributes
    firstname: 'mohamed',
    lastname: 'benzineb',
    email: 'test@gmail.com',
    age: 21,
    skills: ['html', 'css', 'js' , 'c++' , 'java'],
    activ: true,
    phoneNumber:{
        firstNumber: '1111',
        secondNumber: '2222',
        thirdNumber: '3333',
                },
    addres:{
        algeria: "oran",
        germany: "berlin",
    },

    // methods
    isActiv:function() {
        if(this.activ) {
            console.log('hello usre');
        }else{
            console.log('goodbye user');
        }
    },
    getAge: function() {
        if (this.age >= 18) {
            console.log('you are adult');
        }else {
            console.log('you are not adult');
        }
    },
}

user.love = 'coding';
user['hobby'] = 'gaming';
console.log(user['phoneNumber']['firstNumber']);

let x = this;

let user2 = Object.create(user,{
    newName: {value: 'newName'},
});

// assigning it is like inheriting the properties of the user object
let user3 = Object.assign( user, user2, car);