/*
CALLBACKS
 - a callback is a function that is passed in as a parameter to another function, then it is ran inside the function body.
 - We can pass functions around like variables and return them in functions and use them in other functions. When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function.

 I.E. .forEach(function(a){

});
      setTimeout(function(a){

    },1000);

- We are going to replicate how a server takes time to give information. So we will use a setTimeout function to allow the delay in giving or updating information.

-We will show that a call back function is beneficial during this time

*/

//creating Data on a "server"
const posts =[
  {
    title:"postOne",
    body:"this is post one"
  },
  {
    title:"postTwo",
    body:"this is post two"
  }
];

//function to update the server with a new post
function createPost(post) {
  setTimeout(function(){
    posts.push(post);
  },2000);
}

//function to get the posts from the server and display on DOM
function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}


createPost({title:"postThree",body:"this is post three"});
getPosts();

//Lets do the same thing again but with a callback
//The purpose of a callback is to allow for asyncronys programming. Meaning this, the function doesnt simply just execute inside another function, but the given function is executed at a certain time within the function it is in. Like third party API's which give back a response, once the response is given then we use the function we gave as an arugment...a callback, we are calling the function back.
//ALSO.. we can pass any function as an argument into a function and you dont have to have a static function inside another function.
const posts2 = [
  {
    title:"postFour",
    body:"this is post four"
  },
  {
    title:"postFive",
    body:"this is post five"
  }
];

function createPost2(post,callback){
  setTimeout(function(){
    posts2.push(post);
    callback();
  },2000);
}

function getPost2(){
  setTimeout(function(){
    let output2 = '';
    posts2.forEach(function(post){
      output2 += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output2;
  },1000);
}

//here we passed a callback function to run after the createpost ran.
createPost2({title:"post4",body:"post four"},getPost2);
