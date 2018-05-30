//WORKING WITH THE EVENT

//You first have to grab an object

const button = document.querySelector(".button");

//Then add the event listener function
//two params. first is the event you are "listening for"
//and second is the annoymous function you are giving

//to prevent default behavior pass into the function the event object

button.addEventListener('click',function(e){
  console.log("hello world");

  e.preventDefault(); //this is a method of the listener obj.
});

//you can always write your functions first then add them to the event listener function.

function onClick() { //you can still pass the event param to this
  console.log("hello world part 2");
}

document.querySelector(".button-two").addEventListener("click",onClick);

//looking through the event object
const eventObj = document.querySelector(".button-three");
eventObj.addEventListener("click", function(e){

console.log(e);

});
