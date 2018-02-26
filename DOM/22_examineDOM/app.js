//PROPERTIES OF THE DOCUMENT

//You can access elements through the properties, but it is not recommended

let val;

val = document; //->Gives all document data of the browser application

val = document.all; // -> Gives an HTML Collection

val = document.all[5]; // -> Gives the tag at index 5 of the Collection

val = document.domain; // -> the local server

val = document.URL; // -> the full url

val = document.doctype; // -> <!DOCTYPE html> ..HTML5

val = document.links; //returns all link on the page as an HTML collection

val = document.forms; //returns HTML collection 


console.log(val);
