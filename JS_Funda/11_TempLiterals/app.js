/***Tempilate literals***/
/*
The old way of writing dynamic html into the browser through JavaScript was to concatenate strings and variables. This is a tidious task to do, because if
you are not seperating the lines of strings, it can be difficult to read the code.

New in ES6 you are able to write a template and stick that template into HTMl document, similar in how PHP uses blocks of an echo statement.

- Use back ticks  ``
- end the expression with ;
- add variables, functions, and conditionals with ${}

*/
//variables to use in html
const name = 'Jacob';
const age = 26;
const job = 'Web Developer';
const married = true;
let html;

//Here will will show the old way. We are going to add a list to the document.
html = '<ul>'+
        '<li>Name: '+name+'</li>'+
        '<li>Age:'+ age +'</li>'+
        '<li>Job: '+job+'</li>'+
        '<li>Married: '+married+'</li>'+
        '</ul>';
//this was taking long to do and is prone to errors

//New ES6 way - template literals
//adding a ternary op and invoking a function
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age} </li>
  <li>Job: ${job}</li>
  <li>Married: ${married}</li>
  <li>life: ${age < 50? 'young':'old'}</li>
  <li>everything: ${motto('go big or go home')}</li>
  </ul>
`;

document.body.innerHTML= html;

function motto(motto){
  return motto;
}

// // var firstName = 'santos';
// // var lastName = 'velasco';
//
//
// var htmlTemplate = `
// <h1>${firstName}</h1>
// <h2>${lastName}</h2>
// `;
// document.body.innerHTML = htmlTemplate;

//Practicing Template Literals

let firstName = prompt("Enter First Name","");
let lastName = prompt("Enter Last Name", "");

const htmlBlock =  `
  <div style="width:100px;height:100px;margin:auto;">
    <form method='post' action=index.html>
    <input type="text" name="first" placeholder="${firstName}"">
    <input type="text" name="last" placeholder="${lastName}">
    <input type="submit" value="submit">
    <form>
  <div>
`;

document.write(htmlBlock);
