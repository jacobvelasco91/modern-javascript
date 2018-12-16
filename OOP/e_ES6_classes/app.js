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

  /*
    Below is a static method. a static method is used by the defining class (Car.addnumbers). Every instance of Car WILL NOT be able to refer to static methods. Functions inside a class are supposed
    to have 'this.something' to change or add things to the class. If it doesnt, then it just becomes a static function.
  */
  static addnumbers(x,y){
    return x + y;
  }
}

const myCar = new Car('honda','civic');
console.log(myCar.presentCar());


//Exercise 12/14/18

//create a Dog class
class Dog {
  constructor(breed,weight){
    this.breed = breed;
    this.weight = weight;
  }
  bark(){
    return `I am a ${this.breed}!`;
  }
}

const dog1 = new Dog('husky',23);

console.log(dog1.bark());
