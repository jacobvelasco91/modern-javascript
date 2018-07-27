/***** PROTOTYPES EXPLAINED *****/

/*
  Each Object has a prototype.
  A prototype is a object.

  The main "prototype" is the top of the ladder 'object.prototype' <- predefined object

  You can say that the prototype is a section of an object meant for functions?

  Then, constructor function object...
  Then, an Object literal.

*/

//An object LITERAL inherits its properties from 'object.prototype'...the main object creator
const obj1 = {
  name: 'obj1',
}

console.log('obj1 has a prototype, check its drop down menu and its prototype will be there. Which will be the "object" prototype',obj1);

/*
An Instance of an object, or an object created by a constructor will inherit from its constructor prototype
*/

//Person constructor
function Person(firstname,lastname,dob) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.birthday = new Date(dob);
}

//adding a function to the Person prototype
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
//Adding another function to the prototype
Person.prototype.getFullName = function(){return `${this.firstName} ${this.lastName}`}

const jacob = new Person('jacob','velasco','11-13-1991');

//A prototypal chain..means you can go up to the Person.prototype to the Object.prototype
//This new object can access the prototype
console.log('the jacob object, which was created through the Person constructor will inherit its propoties and methods, and has ACCESS to its prototype. click the drop down',jacob);
console.log(jacob.calculateAge()) // -> 26
console.log(jacob.getFullName()) // -> 'jacob velasco'

/*
So far we are getting data, we can also manipulate
*/

//Function to change the name of the last name
Person.prototype.gotMarried = function(newLastName){
  this.lastName = newLastName;
}

console.log('lastname before gotmarried(argument) ran ->', jacob.lastName);
jacob.gotMarried('Velaco123');
console.log('Lastname after we ran gotmarried(argument) ->',jacob.lastName);

//
console.log('go to the __proto__ and go to the next __proto__, you will see other functions that are from the object.prototype that we can use', jacob)
/*
 hasOwnProperty() is a function from the object prototype
*/

//here we can check which properties are inside of an object
console.log(jacob.hasOwnProperty('firstName')); //-> returns a boolean, TRUE
console.log(jacob.hasOwnProperty('gotMarried')); //-> returns FALSE because 'gotMarried' is in the prototype.
