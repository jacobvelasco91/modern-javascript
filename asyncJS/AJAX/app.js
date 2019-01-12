/*
AJAX = asyncronus Javascript and XML

AJAX is an older form of calling http requests

*/

//to make an ajax call you first have to understand the parts

//1. listen for an event which will call a function to gather external data via AJAX technique
//2. Create a XMLHttpRequest object
//3. Open the request and declare what type of REQUEST and give it the appropriate URL
//    --> 1st param type ofrequest GET || POST 2nd p is URL you are using it on 3rd p T or F for async
//4. Send the request
//5. upon receiving a successful response fire a function to do something upon that load with .onLoad

//1.listen for an event
document.getElementById('get_data').addEventListener('click', loadData );

//loadData function
function loadData(){
  //2.create XMLHttpRequest
  const xhr = new XMLHttpRequest();
  //3.open the new xhr request object
  //from a json file /xhr.open("GET","./data.json",true);
  xhr.open("GET","data.txt",true);

/* HERE you could add which type of response you would like */
// it could be json, text, or xml. most of the time we will receive a json response. if we dont and its a string in object syntax we would need to parse the response.
  // from a json file /xhr.responseType = 'json';
  xhr.responseType = 'text';
  console.log(xhr);
  //4.Send the request
  xhr.send();



  //5.wait for a response & upon success
  xhr.onload = function(){
    let content =JSON.parse(this.response); //because the response was plain text/string in object syntax
    let div = document.getElementById('div');
    div.innerHTML = `Hello my name is ${content.name.first} ${content.name.last}. I am ${content.age} years old and am a ${content.gender}. see you!`;
  };
}
