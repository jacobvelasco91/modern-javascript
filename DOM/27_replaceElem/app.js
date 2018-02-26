//REPLACING ELEMENTS

/*
Will work with REMOVING and REPLACING elements
Will work with ATTRIBUTES and CLASSES and learn how to REMOVE,REPLACE, MANIPULATE
*/

/*  REPLACING AN ELEMENT  */
//replace h1 with h3 , and change text to favorite sports
const newHeading = document.createElement('h5');
//add id to the heading
newHeading.id = 'heading';
//add a text node
newHeading.appendChild(document.createTextNode('Favorite Sports'));

//Now grab old heading
const oldHeading = document.getElementById('h1');

//We also need a parent to call on replaceChild()
const parent = document.querySelector('div#card');

//Now to replace
parent.replaceChild(newHeading,oldHeading);

console.log(newHeading);

/*  REMOVING AN ELEMENT  */
//we want to remove a specific li element in the list
const list = document.querySelector('ul.hobbies'); //whole un ordered list
const lis = document.querySelectorAll('li'); // Node list of all li's

//remove first element by using the li tags
lis[0].remove(); //

//remove element by using the parent element
list.removeChild(lis[2]); //removed the fourth element


/*  CLASSES AND ATTRIBUTES  */
//going to add/change attribute/classes on the first li
//first grab the first li
const firstLi = document.querySelector('li:last-child');
console.log(firstLi); //a list item with an 'a' tag as a child
//grab the link
const link = firstLi.children[0];
console.log(link);

let val;
//working with manipulating CLASSES
val = firstLi.className; //this returns the current class of an element
val = firstLi.classList; //DOMtoken list , used if there are many classes in a tag
val = firstLi.classList[0]; //retrieves the first class in the list
val = firstLi.classList.add('test'); //sets another class to the element
val = firstLi;
val = firstLi.classList.remove('hobby-item'); //removes an class name
val = firstLi;

//working with manipulating ATTRIBUTES
val = link;
val = link.getAttribute('href'); //we get the VALUE of the given attribute name
val = link.setAttribute('title','link'); //sets an attribute
val = link;
val = link.hasAttribute('href');//returns true, because it does have an attribute 'href'
val = link.removeAttribute('title'); //removed the title attribute
val = link;


console.log(val);


let input;

let tag = document.getElementById('card');
tag.className = 'classname';
tag.className = 'newClassName';
tag.classList.add('secondClass');
tag.classList.remove('newClassName');

console.log(input);
