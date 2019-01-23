/*
  ARROW FUNCTIONS
*/

//ES5 way of writing functions
const sayhello = function (){
  console.log('Hello');
}
//ES5 way of returning something from a function
const return1 = function () {
  return "i have returned from the function";
}
//return an object
const obj1 = function(){
  return {title:"book one",body:"body of book one"};
}


/* ES6 NEW ARROW FUNCTIONS */
//ES6 way of writing functions | remove function keyword and after brackets add a fat arrow
const sayBye = () => {
  console.log('buh-bye');
}
//ES6 one line function | one arrow function work without braces if its on one line
const whatsUp = () => console.log('whatsUp!');
//ES6 way of returning something in one line
const return2 = () => 'return part two';
//Arrow function to return an object
const obj2 = () => {
  return {title:"two",body:"two body"};
}
//if single line, must place brackets around the object
const obj3 = () => ({title:"book three",body:"body of book three"});
//single param does not need parenthesis
const param = num => console.log(num+10);
//param that is more than one will need parenthesis
const add = (num1,num2) => console.log(num1+num2);

//Arrow Functions can be used as callback functions
const data = [{title:"one",body:"body one"},{title:"two",body:"body two"}];
//older
data.forEach(function(object){
  console.log(object);
});
//newer with arrow function
data.forEach( (object) => {
  console.log(object);
});
//Remember single param dont need parenthesis
data.forEach( object => console.log(object) );


console.log(return1());
console.log(return2());
sayhello();
sayBye();
whatsUp();
console.log(obj1());
console.log(obj2());
console.log(obj3());
param(5);
add(10,10);


/* UPDATING THE FETCH API to utilize arrow functions */

//Remember Fetch returns a promise | re-read promise notes if un familiar
//function getText
document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getAPI);
function getText(){
  //enter file as an argument into the fetch function
  fetch('text.txt')
    .then( response => {
      return response.text(); //going to return a promise with a value of our text
    })
    .then( data => {
      document.getElementById('output').textContent = `${data}`;
    })
    .catch( err => { //catching an error
      console.log(err);
    });
}
//Return GitHub API
//using single param & returning without the use of brackets or return keyword in one line
function getAPI(){
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => data.forEach(user => console.log(user.id)));
};
