//MULTIPLE SELECTIONS

//RETURNS MULTIPLE ELEMENTS AS HTML COLLECTIONS OR NODE LIST


/*  FIRST WAY OF SELECTING MULTIPLE ELEMENTS */

//document.getElementsByClassName
const item = document.getElementsByClassName('hobby-item'); //HTML COLLECTION ; like array
console.log(item); //[0,1,2,3] of li
console.log(item[1]);
//change style from one list item ; this case item 2
item[1].style.color = 'red'; //'football' changed to red

/* SECOND WAY OF SELETING MULTIPLE ELEMENTS */
//using queryselector to get a parent then the getting elements by class after that
//This is more specific, that way you arent getting all the elements in the html global scope
const listItem = document.querySelector('ul').getElementsByClassName('hobby-item');

listItem[2].style.color = 'blue';


/* THIRD WAY OF SELECTING MULTIPLE ELEMENTS */
//document.getElementsByTagName
//same thing, but getting the tag name and not the class
let lis = document.getElementsByTagName('li');
console.log(lis);
lis[3].style.color = 'green';


/*
HTML COLLECTIONS ARE SIMILAR TO ARRAYS IN THAT THEY HAVE INDEXES, BUT THEY ARE NOT TREATED AS
ARRAYS.
lis.reverse();  -> PRODUCES AN ERROR

TO CONVERT AN HTML COLLETION INTO AN ARRAY :
lis = Array.from(lis);

*/

lis = Array.from(lis);
lis.reverse(); //reverse the array
console.log(lis); //error is gone, because we convereted the html collection to array

lis.forEach(function(item){
  console.log(item);
});

/* FOURTH WAY OF GETTING MULTIPLE ELEMENTS */
//document.querySelectorAll();
//Because this is a node list, we dont have to convert to an array to use array methods

const items = document.querySelectorAll('ul.hobbies li.hobby-item'); //selected like css
console.log(items); //NOT HTML COLLECTION. THIS IS A NODE LIST

items.forEach(function(item,index){
    item.textContent = `${index} hello`;
});


//selecting odd or even
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item,index){
  item.style.backgroundColor = 'lightgray';
});

liEven.forEach(function(item,index){
  item.style.backgroundColor = 'lightblue';
});
