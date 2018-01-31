/*Concatenating*/

const firstName = 'Santos';
const lastName = 'Velasco';
const age = 26;
const str = 'hello everybody this is santos';

let val;

//concat
val = firstName + " " + lastName;

//append ; adding to the same string
val = 'Santos ';
val += 'Velasco';
val = "Hello my name is " + firstName + " and I am " + age;

//Escaping
val = 'that\'s awesome to hear. I can\'t wait';

//Length ; a property to show how many characters in string
val = firstName.length;

//concat() ; a method of the string object
val = firstName.concat(" ",lastName);

//change case
val = firstName.toLowerCase(); //-> Santos to santos
val = firstName.toUpperCase(); //-> santos to SANTOS

//also we can treat a string as an array
val = firstName[3]; // -> t

//indexOf
val = firstName.indexOf('s'); //searches for the character & returns the index;frm left 2 right
val = firstName.lastIndexOf('n'); //same but from right to left

//charAt
val = firstName.charAt('2'); //returns the character from the inserted index
//get the last char
val = firstName.charAt(firstName.length - 1 );

//get a substring out of a string
val = firstName.substring(0,5);

//slicing , pulling things out of an string ; mostly used with array
val = firstName.slice(0,5);
val = firstName.slice(-2); //can start from the reverse

//spliting ; you can split a string according to the value given
val = str.split(' ');

//replacing values in a string. first argument finds the value second is what changes
val = str.replace('santos', 'jacob');
val = val.split(' ');





console.log(val);
