/*
  HERE WE  ARE CREATING A HTTP REQUEST LIBRARY.
   - Basically a class that will have methods that make HTTP requests: GET, POST, PUT, DELETE
   - The purpose of this library is to fetch the data without having to open a new xhr request and go
     through all the xhr request pattern

  1. We will create class that has the xhr object as a property
  2. We will add methods to the prototype class, the different methods will be :
     - GET
     - POST
     - PUT
     - DELETE
  3. In each method it will vary if they take a url,data, or a callback function
*/

//Easyhttp Class
function Easyhttp(){
  this.http = new XMLHttpRequest();
}

//HTTP GET REQUEST
/*
  1. We will be passing a url and a callback function
  2. The callback function will need two arguments
  3. We will pass an error message to the 1 param of the callback function
  4. The response of the GET request will be passed to the callback function in 2 param
  5. The callback function *definition* will then do something with the response data
*/
Easyhttp.prototype.get = function(url,callback){
  //open xhr
  this.http.open('GET',url,true);
  //set onload and capture 'this' in variable 'self'
  let self = this;
  this.http.onload = function(){
    //check if status is 200
    if (self.http.status === 200) {
      callback(null,self.http.responseText) //passing null to first argument because no error
    } else {
      callback(`Error:`+this.http.status) //first argument will be the error, no 2nd param needed
    }
  }
  this.http.send();
};

//HTTP POST REQUEST
/*
  POST will add data to a server in some fashion
  1. We will pass url,data object, and a callback function
  2. callback function will take two arguments err, and response | function definition will handle
  3. Data will be an object we pass as an argument in .send() as a JSON stringify
  4. We set the setRequestHeader('Content-type','application/json'); after .open() & before .send()
*/
Easyhttp.prototype.post = function(url,data,callback){
  //open xhr
  this.http.open('POST',url,true);
  //set the request header
  this.http.setRequestHeader('Content-type','application/json');
  //onload & capture 'this'
  let self = this;
  this.http.onload = function(){
    //check is status is 201 for POST request | 201 = successful new resource created
    if (self.http.status === 201) {
      callback(null,self.http.responseText);
    } else {
      callback(`ERROR:`+self.http.status);
    }
  }
  //send request w/ the data object that has been stringify
  this.http.send(JSON.stringify(data));
}

//HTTP PUT REQUEST
/*
 1. We will pass url,data object, and a callback function
 2. callback function will take two arguments err, and response | function definition will handle
 3. Data will be an object we pass as an argument in .send() as a JSON stringify
 4. We set the setRequestHeader('Content-type','application/json'); after .open() & before .send()
 5. Difference is the url will be different because it is a PUT request
 6. The data we use is to update or change an object on the server or API server
*/
Easyhttp.prototype.put = function(url,data,callback){
  //open
  this.http.open('PUT',url,true);
  //set header
  this.http.setRequestHeader('Content-type','application/json');
  //load & capture this
  let self = this;
  this.http.onload = function(){
    //no checking because it is a put request
    callback(null,self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//HTTP DELETE REQUEST
/*
  1. We will pass a url and callback function
  2. url will specify which ata object to delete
  3. callback function will take 2 arguments err and response
  4. delete needs no data only a specified id or url link to send a command to delete
*/
Easyhttp.prototype.delete = function(url,callback){
  //open
  this.http.open('DELETE',url,true);
  //onload & capture 'this'
  let self = this;
  this.http.onload = function(){
    callback(null,"resquest to delete successful");
  }
  this.http.send();
}
