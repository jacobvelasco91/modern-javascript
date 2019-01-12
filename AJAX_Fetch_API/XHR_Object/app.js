/*
AJAX = asyncronus Javascript and XML

AJAX and the XMLHttpRequest object is an older form of calling http requests

*/

//to make an ajax call you first have to understand the parts

//1. listen for an event which will call a function to gather external data via AJAX technique
//2. Create a XMLHttpRequest object
//3. Open the request and declare what type of REQUEST and give it the appropriate URL
//    --> 1st param type ofrequest GET || POST 2nd p is URL you are using it on 3rd p T or F for async
//4. Send the request
//5. upon receiving a successful response fire a function to do something upon that load with .onLoad

//1.listen for an event
document.getElementById('Launch').addEventListener('click', loadData );

function loadData(){
  //create XHR
  const xhr = new XMLHttpRequest();
  //open method
  xhr.open("GET","data.txt",true);
  //send request
  xhr.send()
  //on sucessful response
  xhr.onload = function(){
    if (xhr.status == 200) { // status of 200 means no errors
      let data = xhr.responseText;
      loadDataToDOM(data);
    }
  }
}


//function to load the data to the DOM
function loadDataToDOM(data){
  let parent_box = document.getElementById('response_box');
  let header_tag = document.createElement('h3');
  header_tag.appendChild(document.createTextNode(data));
  parent_box.appendChild(header_tag);
  setTimeout(function(){
    document.getElementById('response_box').firstElementChild.remove();
},4000);
}
