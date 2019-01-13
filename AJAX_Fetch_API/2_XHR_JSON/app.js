/*
WORKING WITH JSON DATA

here we are still working with AJAX and XMLHttpRequest

JSON is just a string in javascript object literal syntax
---> JSON properties HAVE TO BE IN DOUBLE QUOTES
---> JSON property values if numbers CAN NOT HAVE SPACES

convert from JSON object into native JS object : JSON.parse()
convert from native JS to JSON object: JSON.stringify()
*/

//event listeners on the buttons
document.getElementById('customer').addEventListener('click', addCustomer);
document.getElementById('customers').addEventListener('click', addCustomers);


//addCustomer #1
function addCustomer(){
  const xhr = new XMLHttpRequest(); // <-- new XMLHttpRequest object
  xhr.open("GET","customer.json",true); // <-- intializing what we want
  xhr.send();
  xhr.onload = function(){
    if (xhr.status == 200) {
      let data = JSON.parse(this.responseText); //<-- data is now a JS object
      loadDOM(data);
    }
  }
}

//addCustomers #2
//working with multiple JSON objects coming from an array
function addCustomers(){
  const xhr = new XMLHttpRequest();
  xhr.open("GET","customers.json",true);
  /*expecting JSON response type, setting it will set convert the json data into a native object and place in xhr.response property*/
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function(){
    if (xhr.status == 200) {
      const customers = this.response; //<--passing the array of objects
      customers.forEach(function(customer){ //<--customer is the current obj
        loadDOM(customer);
      });
    }
  }
}

//populate DOM
function loadDOM(data){
  const parent = document.getElementById('response_box');
  let ul = document.createElement('ul');
  ul.innerHTML = `
   <li>id: ${data.id}</li>
   <li>name: ${data.name}</li>
   <li>company: ${data.company}</li>
   <li>phone: ${data.phone}</li>
  `;
  parent.appendChild(ul);
}
