/*Concatenating*/

const firstName = 'Santos';
const lastName = 'Velasco';
const age = 26;
const str = 'hello everybody this is santos';

let val;

//concat
val = firstName + " " + lastName;
val = firstName + " = " + lastName;

//append ; adding to the same string
val = 'Santos ';
val += 'Velasco';
val = "Hello my name is " + firstName + " and I am " + age;
val = firstName;
val +=" " + lastName;

//Escaping
val = 'that\'s awesome to hear. I can\'t wait';
val = "hello guy\'s";

//Length ; a property to show how many characters in string
val = firstName.length;
//This ill show how many characters a string has, including empty spaces
val = firstName + " " + lastName;
let valLength = val.length;
console.log(valLength);

//concat() ; a method of the string object
val = firstName.concat(" ",lastName);
val = firstName.concat(" ",lastName);

//change case
val = firstName.toLowerCase(); //-> Santos to santos
val = firstName.toUpperCase(); //-> santos to SANTOS
val = firstName.toUpperCase();
val = lastName.toLowerCase();

//also we can treat a string as an array
val = firstName[3]; // -> t
val = firstName[2]; //getting the third character

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

//working with slice
//slice pull from the first param and ends before the second param
//slice(1stparam, 2ndparam)
const churches = ['lavina','icta','firstassembly','generations']; //array
let slice = churches.slice(-2);

//working with spliting
//So, splitting basically splits any string at the given value, and creates an array from that split. The value given to know where to split is not included in the array
let url = 'https://github.com/jacobvelasco91/modern-javascript';
let urlSplit = url.split('com');
let gitAccount = urlSplit[1];

console.log(gitAccount);

console.log(urlSplit);

console.log(slice);

//Working with replace
//basically 'replace(param1,param2)' will search for the given characters and replace them with what the second param is
let name = 'Santos';
console.log(name);
let replaceName = name.toLowerCase();
replaceName = replaceName.replace('santos','jacob');
console.log(replaceName);




console.log(val);
