/* Primitive Data Type
Stored directly in the location the variable accesses

string : "John Doe" or 'John Doe'
number : 1234 or 23.34234
boolean : true or false
null : intentionally empty value
undefined : variable that hasnt been assigned a value ; all variables are undefined by default
symbols : (ES6)

*/
//PRIMITIVE
const name = 'John Doe';
console.log(typeof name); //-> type:string
const age = 26;
console.log(typeof age); //-> type:number
const hasKids = false;
console.log(typeof hasKids); //-> type:boolean
const car = null;
console.log(typeof car); //-> type: object bug of null
let test;
console.log(typeof test); //->type:undefined
const sym = Symbol();
console.log(typeof sym); //->type:symbol

/* Reference Data Types
Accessed by reference ; objects or arrays. data isnt actually stored in the variable, its stored in 'heap'
 - considered objects
 arrays
 object literals
 functions
 dates
 anything else that you can store data

*/
//REFERENCE TYPE
const hobbies = ['drums','coding','music']; //array
console.log(typeof hobbies); //-> type:object

const address = {
  city: 'Ontario',
  state: 'California'
} //object

console.log(typeof address); //-> type:object

const today = new Date();
console.log(today); //->the current date and time
console.log(typeof today); // type:object
