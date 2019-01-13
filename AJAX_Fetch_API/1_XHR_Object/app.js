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
document.getElementById('Launch2').addEventListener('click', loadData2 );
document.getElementById('Launch3').addEventListener('click', loadData3 );

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
/*ANOTHER FUNCTION WITH EXTRA DATA OUTPUT & METHODS */
function loadData2(){
  //create XHR
  const request = new XMLHttpRequest();
  //call the open method
  request.open("GET","data2.txt",true)
  //Check the status of the request
  console.log(request.status);        //<-------- HTTP Status (0)
  console.log(request.readyState);   //<-------- ready state values (1)
  //send request
  request.send();
  //onprogress we pass a anonymous function
  request.onprogress = function(){
    //We can do a loader/spinner for the ui while the readystate goes from 3 to 4
    console.log(`This readyState is the state in which it is in progress:${this.readyState}`);//<-- readystate (3)
  }
  //a sucessful response was returned AKA ready state 4
  request.onload = function(){
    console.log(request.readyState); //<--- ready state values (4)
    console.log(request.status);      //<--- HTTP status (200)
    //RESPONSE either .response or responseText
    //.responseText is text;.response returns that according to responseType
    const content = request.responseText;
    loadDataToDOM(content);
  }
  request.onerror = function(){
    console.log("an error happened");
  }
}

/* YOU CAN ALSO MOVE THROUGH THESE PROPERTIES IN THE XHR OBJECT */
// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

function loadData3(){
  //THIS FUNCTION WILL NOT USE onload function we will use onreadystatechange
  const xhr = new XMLHttpRequest();
  xhr.open("GET","data3.txt",true);
  xhr.onprogress = function(){
    console.log('do something during loading');
  }
  xhr.send();
  xhr.onreadystatechange = function (){
    //the readystate determines at what state is the response
    console.log(this.readyState);
    if (xhr.readyState == 4) {
      let content = xhr.responseText;
      loadDataToDOM(content);
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
