// //var, let, const
//
// var name = "John Doe"; //string with double quotes
// console.log(name);
// name = 'steve smith'; //string with single quotes
// console.log(name); //-> steve smith ; variable changed
//
// //init variable
// var greeting; //just initializing no value or not defined
// console.log(greeting); //-> undefined
// greeting = 'hello';
// console.log(greeting); //-> 'hello'
//
// //multi word convention to name variables
// var firstName = "camelcase variable"; //camelCase convention
// var FirstName = "Santos"; //Pascal convention
// var first_name = 'santos'; //underscore convention
// //camelCase is the convention to work in. Objects or classes start with uppercase; constructer function
// //regular variables use camelCase

/* LET */
//on the surface basically the same as var
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

/* CONST */
//const means it cant be reassigned
//const cant be undefined. it has to be declared as some type of value
// const fName = "santos";
// console.log(fName);
// fName = 'jacob';
// console.log(fName);
// const greeting;
// console.log(greeting);

// const used within arrays and objects . data inside can change but the data name it is assigned to
// cannot change. even though we changed the data in the object, it is still that object

const person = {
  name: "jacob",
  age: 26
}
console.log(person);
person.name = "santos";
console.log(person);

//or when working with arrays
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers); //-> the data was changed but the const 'numbers' doesnt have a completely new array

//const can mutate ; using const lets programmers know that this value cannot be changed with a new set of values 
