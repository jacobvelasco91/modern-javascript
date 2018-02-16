/* ARRAYS ARE ESSENTIALLY LISTS */
//create arayys
const numbers = [44,33,7,2,19,26];
const numbers2 = new Array(55,72,13,12,44);

//arrays can also hold strings
const fruit = ['apples','pears','oranges','strawberries','bananas'];

//mixed types in an array
const mixed = ['apples',55,'brown shoes',13,false,{a:1,b:2},new Date()];

let val; //delcared a variable. have not defined it yet. using to mutate it threw out

//get array length ; just like getting length of string .length is a property
val = numbers.length; //-> 7

//check if something is an array ; good way of testing node lists in the DOM
val = Array.isArray(numbers); //->true

//get single value from an array; place value or index of the array. arrays are zero based
val = numbers[3]; //->2

//insert/update arrays
numbers [3] = 100; //->index 3 is now 100

//find index of value ; so for a value given, what index does it have?
val = numbers.indexOf(100); //->index 3

//MUTATING Arrays
//add to the end
numbers.push(27);
//add to the front
numbers.unshift(43);
//Take off from end ; think of it of just popping it off of the end
numbers.pop();
//Take off from the front ; opposite of unshift which adds a value
numbers.shift(); //->took off 43
//splice values ; taking sections off; different from SLICE, which LEAVES ORIGINAL ALONE
numbers.splice(3,1); //-> took off 100;
//Reverse the array
numbers.reverse(); //-> reversed the array

//Concatenating Array
val = numbers.concat(numbers2); //got the other array and added it to the current array val
//giving numbers some more numbers
numbers.push(5,3,6,7,10,55);

//Sorting Array
val = fruit.sort(); //-> made them be alphabetical **AND IS CASE SENSITIVE**
// val = numbers.sort(); //This will sort from the ones place number **WRONG***
//
// //return sorted numbers from least to greatest
// val = numbers.sort(function(x,y){
//  return x- y;
// }
// );
// //return sorted numbers from greatest to least
// val = numbers.sort(function(x,y){
//     return y-x;
// });

//Find , takes in a testing function
function under50 (num) {
  return num > 50;
}
numbers.reverse();
val = numbers.find(under50);



console.log(numbers);
console.log(val);
