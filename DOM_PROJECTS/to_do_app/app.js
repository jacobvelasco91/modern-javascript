/*** DOM VARIABLES ***/
const date = document.getElementById('#date'); //date div
const newTaskForm = document.querySelector('.task-form'); //task form
const newTask =document.querySelector('.input-task'); //input tag
const list = document.querySelector('#list'); // unordered list
const clearTasks = document.querySelector('.clear-tasks');

/*** Event listeners ***/
newTaskForm.addEventListener('submit',addTask);
list.addEventListener('click',removeTask); //event delagation to remove item
clearTasks.addEventListener('click',clearAllTasks);




/*** Functions ***/


function addTask(e){
  if (newTask.value === '') {
    alert('enter a new task');
  } else {
  //create new li element w/ classes and child link(<a>) element
  const li = document.createElement('li');
  li.className = "list-item";
  li.appendChild(document.createTextNode(newTask.value)); //appending input val
  //create link with i inner html
  const link = document.createElement('a');
  link.className = 'delete-item second-content';
  link.href = '#';
  link.innerHTML = '<i class="fas fa-minus-circle"></i>';
  //append the link to the li tag
  li.appendChild(link);
  //..Now append the newly created element to the list
  list.appendChild(li);
  /* set local storage*/


  //then, clear the input field
  newTask.value = '';
  e.preventDefault(); //prevent default behavior of form submittal
  }
}

function removeTask(e){
  //make sure e.target is the delete icon
  if (e.target.parentElement.classList.contains('delete-item')) {
    //now delete the whole <li>
    e.target.parentElement.parentElement.remove();
  }
}

function clearAllTasks(){
  while (list.firstChild){ //while loop faster; while true
    list.removeChild(list.firstChild);
  }
}
