
var mySym = Symbol("Key1");

var obj = {
    name:"Shreyash Kawale",
    age:23,
    hobbies: ["Cricket", "Chess", "Watching Anime"],
    "is Loggedin":false,
    email:"sk@gmail.com",
    [mySym]: "Great",

    getName: function(){
        console.log(this.name);
        
    }
}

console.log(obj["is Loggedin"]);
console.log(typeof obj[mySym]);


obj.status = "Pass";

console.log(obj.status);
// console.log(obj);

obj.age = 24;
// console.log(obj);

Object.freeze(obj);

obj.age = 50;

console.log(obj)




// Objects with String Literals ( This objects doesn't create base structure or blueprint).

// BEFORE ES6 
// {}
// function constructor

// After ES6
// Class Keyword

// const person = {
//     fname: 'shreyash',
//     lname: 'kawale',
//     contact: '9359977377',
//     city: 'Patur',
//     getname: function(){
//         console.log('Shreyash Kawale');
//     }
// }

// const p2 = {
//     fname: 'john',
//     lname: 'lee',
//     contact: '9347628399',
//     city: 'Tokiyo',
//     getname: function(){
//         console.log('john lee');
//     }
// }

// console.log(person.getname());

// Function Constructor

// function Person(fname, lname, contact){

//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;

//     this.getName = function(){
//         console.log(this.fname, this.lname)
//     };

//     this.getContact = function(){
//         console.log(this.contact);
//     };
// }

// const person1 = new Person('shreyash','kawale','9359977377');
// const person2 = new Person('vishal','gaikwad','9823592875');
// const person3 = new Person('aditya','chauhan','82759275927');
// const person4 = new Person('chetan','kawale','1346784363');

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)

// person1.getName();
// person4.getContact();

// Class keyword

class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getName() {
    console.log(this.fname, this.lname);
  }

  getContact() {
    console.log(this.contact);
  }
}


const person1 = new Person('shreyash','kawale','9359977377');
const person2 = new Person('vishal','gaikwad','9823592875');
const person3 = new Person('aditya','chauhan','82759275927');
const person4 = new Person('chetan','kawale','1346784363');

console.log(person1, person2, person3, person4);
// console.log(person2,person1)
// console.log(person3)
// console.log(person4)

person1.getName();
person4.getContact();


