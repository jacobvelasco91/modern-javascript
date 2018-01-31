/*** Math ***/

const num1 = 5;
const num2 = 10;

let val;

//math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
//This is an object it has properties and methods (functions)
val = Math.PI; // ->3.14444...
val = Math.E; // ->2.718....
val = Math.round(2.4); //-> 2
val = Math.round(2.6); //->3
val = Math.ceil(2.2); // Will always round up -> 3
val = Math.floor(2.7); //Will always round down ->2
val = Math.sqrt(64); //->8
val = Math.abs(-3); //Absolute number, if we put a negative number itll give absolute num -> 3
val = Math.pow(3,2); //->9
val = Math.min(4,45,23,87,11,3,45,2); //-> returns the lowest number
val = Math.max(4,45,23,87,11,3,45,2); //-> 87 returns highest number

//Working with random numbers
val = Math.random(); //gives us a random decimal number

val = Math.random() * 20; //Gives random number from 0 -19 w/decimals
val = Math.random() * 20 +1; //Gives random number from 1 - 20 w/decimals
val = Math.floor(Math.random()*20 +1); //Random number from 1-20 with no decimals


console.log(val);


//get the precision of the float
console.log(val.toFixed(3)); // three decimal places
