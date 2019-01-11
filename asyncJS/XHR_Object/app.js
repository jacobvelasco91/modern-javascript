//listen for the button click
document.querySelector('button').addEventListener('click',xhr);


//function XHR
function xhr () {

//instantiate a new xhr object
const xhr = new XMLHttpRequest();

//Open
xhr.open('GET','data.txt',true);

xhr.onload = function(){
  if(this.status === 200 ){
    console.log(this.readyState);
  }
}
xhr.send();
}
