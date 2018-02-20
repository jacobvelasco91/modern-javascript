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
val = Math.PI; // ->3.14444... val - Math.PI
val = Math.E; // ->2.718.... val = Math.E
val = Math.round(2.4); //-> 2 val = Math.round('Place a number here');
val - Math.round(2.7); // ->3
val = Math.round(2.6); //->3
val = Math.ceil(2.2); // Will always round up -> 3 Math.ceil();
val = Math.floor(2.7); //Will always round down ->2 Math.floor
val = Math.sqrt(64); //->8 Math.sqrt()
val = Math.abs(-3); //Absolute number, if we put a negative number itll give absolute num -> 3 val = Math.abs
val = Math.pow(3,2); //->9 Math.pow(base,power)
val = Math.min(4,45,23,87,11,3,45,2); //-> returns the lowest number Math.min
val = Math.max(4,45,23,87,11,3,45,2); //-> 87 returns highest number Math.max

//Working with random numbers
val = Math.random(); //gives us a random decimal number

val = Math.random() * 20; //Gives random number from 0 -19 w/decimals
val = Math.random() * 20 +1; //Gives random number from 1 - 20 w/decimals
val = Math.floor(Math.random()*20 +1); //Random number from 1-20 with no decimals


console.log(val);


//get the precision of the float
console.log(val.toFixed(3)); // three decimal places

//Practice on math object

val = Math.round(3.2); //->3
val = Math.ceil(3.1); //->4
val = Math.floor(5.7); //->5
val = Math.sqrt(64); //->8
val = Math.abs(-6); //->6
val = Math.pow(2,3); //->8
val = Math.min(5,3,6,1,8); //->1
val = Math.max(6,9,3,5,1); //->9

//how getting random numbers work
val = Math.random(); //gives a random decimal number
val = Math.random() * 20; //Gives a random decimal number from 0 - 20, not including 20
val = Math.random() *20 +1; //Gives a random deciaml number from 1-20, including 20
val = Math.floor(Math.random() * 20 +1); //Gives random number without decimal

//knowning where to place deciaml numbers
val = 2.5465;
fixedVal = val.toFixed(2); //->2.55

console.log(fixedVal);
