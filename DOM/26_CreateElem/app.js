/* CREATING ELEMENTS */

//document.createElement();
const li = document.createElement('li'); //creating an li element

//add class
li.className = 'hobby-item'; //adding a class of 'hobby-id'

//Add id
li.id = 'hobby-id'; // adding an id of 'hobby-id'

//Add attribute
li.setAttribute('title','New Item'); // 1st param = attribute , 2nd param = value

//create text node ; something inside of the li we created
li.appendChild(document.createTextNode('Hello World'));

//create a link inside the li element

const link = document.createElement('a');

//add a class to link
link.class = 'link';
//give attribute
link.setAttribute('href','#');

//add text into link
link.appendChild(document.createTextNode('link'));

//append the link to the new li
li.appendChild(link);

//append the created li to ul
document.querySelector('ul').appendChild(li);

console.log(li);
