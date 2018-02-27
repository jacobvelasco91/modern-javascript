const button = document.querySelector('.button');
button.addEventListener('mouseover',subscribed);

let val = window;
console.log(val);

function subscribed(){
window.location = 'http://google.com';
  console.log('fired!');
}
