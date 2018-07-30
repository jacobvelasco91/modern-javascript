/***** PROTOTYPAL INHERITANCE *****/
/*
  We are able to inherit properties and prototypal functions from other objects/constructors

  To inherit from a constructor function we use the .call() function
    - first arugment is the object that will USE the function, then the following arugments for the function parameters.
  To inherit the prototype, we set the new constructor's prototype to Object.create(object.pro)
  then we change the contructor to be the current constructor.

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
  We added a function to the Person prototype

  Now lets inherit from the Person construtor when creating another constructor function
*/


//the new constructor still needs the parameters for what will be inherited
function Customer(fName,lName,phone,membership){
/*
  use the .call() function on the Person function/constructor
  Then, state that Customer is going to call this function by using 'this', and add the parameters accordingly
*/

Person.call(this,fName,lName);

//Now set the properties accordingly with 'this'
this.phone = phone;
this.membership = membership;
}

//create a customer object
const customer1 = new Customer('claudia','velasco','555','standard');

console.log(customer1); //customer1 should have inherited the properties from Person

//Try accessing the prototype of Person
// console.log('trying to access greeting()',customer1.greeting());
//we get an error, that the function isnt found.
//we need to add the prototypes and set its constructors

//inherit prototype (remember, customer1 is not an instance of Person, so we inherit the proto)
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
