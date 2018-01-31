/*TYPE CONVERSION*/

let val;

//Number to string;
val = String(234)
val = String(222.2);

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4]);

//toString()
//similar to the string function, but its a function. you either you String() or this..

val = (234).toString();

//String to NUMBER
val = Number('5'); //-> 5 number type , not string
val = Number(true); //->1
val = Number(false); //->0
val = Number(null); //-> also gives 0 ; for number
val = Number('hello'); //-> NaN : When a value tries to get parsed as a number but it cant.
val = Number([1,2,3]); //-> also NaN

//another way of parsing
val = parseInt('4534');
// a float, which is decimals
val = parseFloat('23.52');



//output
console.log(typeof val);
console.log(val);
//console.log(val.length); //val length only works on strings or arrays ; number of characters
console.log(val.toFixed(2)); //how many decimal places we have


/*** TYPE COROSION***/

//JavaScript does the converting for us

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); //-> changed the 6 to a string, because it was being added to a string
console.log(typeof sum);
