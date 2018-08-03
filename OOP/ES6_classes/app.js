/***** ES6 CLASSES *****/
/*
  How to create classes in JavaScript using ES6
*/

//create a class constructor the old way
function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
//add a method/function to the construtor object prototype
Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

//create an object and output to console
const jacob = new Person('jacob','velasco');
console.log(jacob, jacob.greeting());

//Now re-create with ES6 classes
class Car {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  presentCar(){
    return `You have a ${this.make} ${this.model}`;
  }
}

const myCar = new Car('honda','civic');
console.log(myCar.presentCar());
