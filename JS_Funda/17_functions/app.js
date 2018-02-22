//FUNCTIONS DECLARATIONS

function greet(){
  //console.log('hello');
  return 'hello';
}

console.log(greet());

//PARAMETERS
const nameFirst = 'Jacob';
const nameLast = 'Velasco';

//adding value to parameters will give them a default if no arguments are supplied
function hotelGreet(name = 'John',last = 'doe') {
  return 'hello '+ name + ' ' + last ;
}

console.log(hotelGreet());
console.log(hotelGreet(nameFirst,nameLast));

//HOISTING AND CLOSURES IS WHY WE CAN USE FUNCTION EXPRESSIONS
const square = function (x){
  return x*x;
};

console.log(square(8));

//IMMEDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFE's
//A function you declare and run at the same time
//to do this, it needs to be an expression, so to make an expression put inside paranthesis
//to close the whole statment you add paraenthesis and a semi-colon

(function(){
  console.log('IIFE Ran...');
})();


//You can add params as well
(function(name){
  console.log('Hello ' + name);
})(nameFirst); //add argument here

//Property METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
};
//adding a method or a property to an object
todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit(55);
todo.delete();




//*********PRACTICING THIS SECTION


//declaring a function

function func1() {
  console.log('hello world');
}

func1();

//
function func2() {
  return 'hello world2';
}

let value = func2();

console.log(value);


// function expressions
let func3 = function(){
  return 'Hello world3';
};

console.log(func3());

//IIFE - IMMEDIATLY INVOKABLE FUNCTION EXPRESSION
(function(){
  console.log('hello world IIFE');
})();

//PARAMS

function func4(x,y) {
  return x*y;
}

let product = func4(5,5);

console.log(product);


//params with IIFE
(function(date){
  console.log("TODAYS DATE IS " + date);
})(new Date());

//creating functions in objects

const obj = {
  func1: function(){
    console.log('using a method');
  },
  iffe:(function(){console.log('iffee inside od object')})()
}

obj.func1();
