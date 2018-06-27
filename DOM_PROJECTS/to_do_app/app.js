//creating the current date
const months = ['January','Febraury','March','April','May','June','July','August','September','October','November','December'];
const dateObj = new Date();
const cDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
//creating the element to append to the date div
const dateElement = document.createElement('h5');
dateElement.appendChild(document.createTextNode(cDate)); //adding current date
//retrieving the div element
const dateDiv = document.querySelector('.date');
dateDiv.appendChild(dateElement);



//styling the search bar

//grabing the main element to fire event delatgation
const filter = document.querySelector('.search-input'); //filter box
const underline = document.querySelector('.underline'); //underline
const filterPlace = document.querySelector('.filter-focus-placeholder'); //placeholder
filter.addEventListener('focusin',function(){
  underline.style.backgroundColor = 'lightblue';
  underline.style.boxShadow = '0px 1px 2px lightblue';
  filterPlace.style.bottom = '4em';
  filterPlace.style.right = '10.8em';
  filterPlace.style.fontSize = '10px';
  filterPlace.style.color = 'lightblue';
});
filter.addEventListener('focusout',function(){
  underline.style.backgroundColor = 'lightgray';
  underline.style.boxShadow = 'none';
  filterPlace.style.bottom = '1.7em';
  filterPlace.style.right = '5em';
  filterPlace.style.fontSize = '16px';
  filterPlace.style.color = 'lightgray';
});
