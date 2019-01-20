/*
  HERE WE  ARE CREATING A HTTP REQUEST LIBRARY.
   - Basically a class that will have methods that make HTTP requests: GET, POST, PUT, DELETE
   - The person of this library is to fetch the data without having to open a new xhr request and go
     the opening and sending of the request.
*/

//constructor with one property | no parameters passed in
function EasyHttp(){
  this.http = new XMLHttpRequest(); //http becomes the xhr request.
}

//MAKE A HTTP GET REQUEST method w/ a parameter of a url
EasyHttp.prototype.get = function(url,callback){

  this.http.open('GET',url); //passing the url to fetch data using the get http request method

  //using a 'this' inside a function will point to the lexical scope of the function, not the current obj
  //basically, we must capture/preserve 'this' because 'this' inside the function cannot see outside func

  let self = this;
  this.http.onload = function() {
    if (self.http.status == 200) {
      //calling the function that was passed into the .get(), and passing the err & responseText to function
      callback(null, self.http.responseText);
    } else { //else there was a status error
      //sending just the error message to the first param of the callback
      callback(`Error:`+self.http.status);
    }
  }

  //Send the request
  this.http.send();

}



//MAKE A HTTP POST REQUEST | passing url, data & callback
EasyHttp.prototype.post = function(url,data,callback){
  this.http.open('POST', url, true);

  //we set the content of the data being sent like this
  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }

  //we send the data with the POST request, since the setRequestHeader is set to JSON, we send a JSON
  this.http.send(JSON.stringify(data)); //when we pass it an object
}



//MAKE A HTTP PUT REQUEST
EasyHttp.prototype.put = function(url,data,callback){

  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let self = this;
  this.http.onload = function(){
    if (self.http.status === 200) {
      callback(null,self.http.responseText);
    } else {
      callback(`THERE WAS AN ERROR:`+self.http.status);
    }
  }
  //Have to stringify the data because we passed it an object
  this.http.send(JSON.stringify(data));

}



//MAKE A HTTP DELETE REQUEST
