/***** PROTOTYPAL INHERITANCE *****/
/*
  We are able to inherit properties and prototypal functions from other objects/constructors, other prototypes

  To inherit from a constructor function we use the .call() function
    - first arugment is the Construcotr that will USE the function(which is, THIS, refering to itself), then the following arugments for the function parameters.
  To inherit the prototype, we set the new constructor's prototype to Object.create(object.pro)
  then we change the prototype.contructor = current constructor name.

*/

//Constructor function #1
function Person(firstName,lastName) { //has two parameters that will give value to properties
  this.firstName = firstName;
  this.lastName = lastName;
}

//adding a function to the Person prototype
Person.prototype.greeting = function(){
  return `Hello, ${this.firstName} ${this.lastName}`;
}

//creating a new person object....an instance of Person
const jacob = new Person('jacob','velasco');

console.log(jacob);
console.log(jacob.greeting());


/*
  So far we created a simple constructor function and an object.
  We added a method to the Person constructor prototype

  Now, lets inherit from the Person construtor when creating another constructor(class) function
*/


//the new constructor will need the parameters that are used by the constructor its inheriting from
// --fName and lName are here to make sure there is a spot to put the inheriting properties
function Customer(fName,lName,phone,membership){
/*
  use the .call() function with the inheriting function/constructor
  Then, state that Customer is going to call this function by using 'this', and add the parameters accordingly
*/

Person.call(this,fName,lName);

//Now set the properties accordingly with 'this' for the other added properties
this.phone = phone;
this.membership = membership;
}

//create a customer object
const customer1 = new Customer('claudia','velasco','555','standard');

console.log(customer1); //customer1 should have inherited the properties from Person

//Try accessing the prototype method of Person
//console.log('trying to access greeting()',customer1.greeting());
//we get an error, that the function isnt found.
//we need to add the prototype methods

//inherit the Person prototype
Customer.prototype = Object.create(Person.prototype);

//create a new customer which will now have inherited the prototypes
const customer2 = new Customer('jacob','velasco','777','VIP');
console.log(customer2.greeting()); //-> we have inherited the Person Prototype
console.log(customer2);
//currently the constructor of each instance of Customer is Person...lets set it back to Customer

Customer.prototype.constructor = Customer;

Customer.prototype.sayHello = function(){
  return `Hey there ${this.firstName}, you are a ${this.membership}`;
}
console.log(customer2.sayHello());



//Exercise 12/8/18

function Car(make,model){
  this.make = make;
  this.model =model;
}
Car.prototype.beep = function(){
  return "BEEP BEEP";
}

function ElecCar(make,model,energy){
  Car.call(this,make,model);
  this.energy = energy;
}
ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const electric_car = new ElecCar('tesla','series-x',500);

console.log(electric_car.beep());
console.log(electric_car);

/* Exercise 12/9/18 */

//parent class
function Parent(race,language) {
  this.race = race;
  this.language = language;
}

Parent.prototype.origin = function(){
  return `Hello, I speak ${this.language}`;
}

//instance the Parent class, which is a new object
const mom = new Parent('hispanic','spanish');

//console both the object and the method
console.log(mom);
console.log(mom.origin());

//inheritance
function Child(race,language,education){
  Parent.call(this,race,language);
  this.education = education;
}
//inherit the prototype methods
Child.prototype = Object.create(Parent.prototype);
//Set the constructor of the Child class to Child
Child.prototype.constructor = Child;
//Instance (new object) from the Child class
const child = new Child('hispanic','spanish','highschool');

//console.log both the object and access the inherited method
console.log(child);
console.log(child.origin());
