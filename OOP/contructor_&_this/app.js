/*
We will understand the fundamentals of the function constructor and the the 'this' keyword
*/

//to begin, an object literal. this is one instance of an object. you cannot make more
// const jacob = {
//   name: 'jacob',
//   age: 26
// };
//
// console.log(jacob);

//This is where the function constructor comes into action; when you want to create multiple instances of an object.

//constructor function
// function Person(name){
//   //this.name = 'jacob';'jacob' is hardcoded so it will appear in all instances of 'Person'. so we need to add a parameter to have the current name all the time.
//   this.name = name;
//   console.log(this);
// };

//instantiating an object from Person
// const jj = new Person('jacob');
// const john = new Person('john');

// console.log(jj);
// console.log(john);
//by using the this keyword inside of the Person constructor , the two object instances are console logging their respective object

//The 'this' keyword refers to the current instance of that object

//so if we console the 'this' keyword in the global scope you will get the window object
console.log(this);

//Rewriting our Person constructor to have a functions
function Person(name,dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime(); //because birthday is a 'Date obj'
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
};


const jacob = new Person('jacob', '11/13/1964');

console.log(jacob);


/*
Here we wrote a function constructor to create many objects from it, which are called instances of the Person object.

We added two parameters to the contructor.

The 'this' keyword refers to the current instance of a object, currently to the 'Person' object. As so, 'this.name' is giving a property of 'name' to the Person Object/constructor and setting the parameter as its value.

When we create an instance/object from the Person constructor all properties and its values are copied to newly created object/instance. So, each time we create a new instance, we can add new arguments to each new object/instance.

By using the 'this' keyword, we can generalize the constructor to allow each instance to refer to itself, because it is refering to itself when it calls on properties of itself.

*/



function Car(make,model,color){
  this.make = make;
  this.model = model;
  this.color = color;
  this.presentation ='This car is a '+this.make +' '+this.model+' '+this.color;
}

const civic = new Car('honda','civic','black');
const chevy = new Car('chevy','silverado','blue');


console.log(chevy.presentation);
