//SINGLE ELEMENT SELECTOR

//Allows us to grab one element , store one element in a variable


//First single element selector
/*  document.getElementById();  */

console.log(document.getElementById('card')); //-> bring whole div element
console.log(document.getElementById('card').id); //->got the ID of the div
console.log(document.getElementById('card').className); //Nothing because no class

//Change the style of an single element
let element = document.getElementById('card');

element.style.background = '#333'; // -> changed background of whole div
element.style.textAlign = 'center'; //->changed/added the text align property on the div

//Change Content
let heading = document.getElementById('h1');
heading.innerText = 'Hello World';
heading.textContent = 'HeLlO wOrLd';
heading.innerHTML = 'Hello World!!';

//  New way of selecting
/*  document.querySelector();  */

let ul = document.querySelector('.hobbies');
ul.style.backgroundColor = 'lightgray';
ul.style.listStyle = 'none';

document.querySelector('li:nth-child(2)').style.color = 'white';
