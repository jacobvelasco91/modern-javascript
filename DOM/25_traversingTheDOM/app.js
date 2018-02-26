//Traversing the DOM

//MOVING UP AND DOWN THE DOM ; Dealing with PARENTS and CHILDREN of specific NODES

let val;

const list = document.querySelector('ul.hobbies');//Unordered list that covers the whole list
const listItem = document.querySelector('li.hobby-item');//Selecting the li w/class of hb-item
val = list; // grabs the whole ul and child 'nodes'
val = listItem; //grabs first li -> soccer

//Getting child Nodes  of the unordered list UL
//this will give more info than just the element
val = list.childNodes; //->returns a NODE LIST li's and text node line breaks



//IF you want just elements and not text nodes, use .children
val = list.children; // -> returns HTML Collection

val = list.children[0]; //-> soccer
list.children[0].textContent = 'Hello'; //->changed text to 'hello' in first list item


//Getting children of children
val = list.children[3].children; //-> gets the children of the child selected
val = list.children[3].children[0]; //-> speficified which child by index

//adding an id or other things
list.children[3].children[0].id = 'link'; //adds id=link to the a tag



/*FIRST CHILD*/
//returns a nodes
val = list.firstChild; //->returns the first node in the list
        //.lastChild;


/*FIRST ELEMENT CHILD*/
//returns html collection
val = list.firstElementChild; //-> grabs first element in list
        //.lastElementChild;

/*GETTING THE AMOUNT OF children  */
val = list.childElementCount; //-> returns 4


/*GET PARENT NODE || ELEMENT  and Parents Parent */
val = listItem.parentNode; //used listItem and got the parent node
val = listItem.parentElement; //got the parent element, the ul tag
val = listItem.parentElement.parentElement; //you can go up the ladder ; grabbed the div


//GET SIBLINGS and you can go so on
val = listItem.nextSibling; // -> NODE
val = listItem.nextElementSibling; //-> returned football because it was the next 'sibling'

//GET PREVIOUS SIBLING

val = listItem.previousElementSibling; //-> nothing beause the first li doesnt have a previous
val = list.children[3].previousElementSibling; //->Got cooking ,bc we 1st targeted researching 

console.log(val)
