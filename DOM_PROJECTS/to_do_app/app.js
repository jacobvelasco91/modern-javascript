/*** DOM VARIABLES ***/
const date = document.getElementById('#date'); //date div
const newTaskForm = document.querySelector('.task-form'); //task form
const newTask = document.querySelector('.input-task'); //input tag
const list = document.querySelector('#list'); // unordered list
const clearTasks = document.querySelector('.clear-tasks');

/*** Event listeners ***/
document.addEventListener('DOMContentLoaded', loadTasks);
newTaskForm.addEventListener('submit',addTask);
list.addEventListener('click',removeTask); //event delagation to remove item
clearTasks.addEventListener('click',clearAllTasks);


/***** Functions *****/

/*Load localStorage*/
function loadTasks(){
  let tasks; //declaring a variable
  if (localStorage.getItem('tasks') === null) { //checking if LS has key:value
    tasks = []; //if there is no tasks key ; create an empty array
  } else { // else there is a key named 'tasks' , so retrieve the JSON info
    tasks = JSON.parse(localStorage.getItem('tasks')); //retrieving then parsing
  }
  // the 'task' parameter will pull the VALUE in the array
  tasks.forEach(function(task){ //looping through array and creating & appending
    const li = document.createElement('li');
    li.className = "list-item";
    li.appendChild(document.createTextNode(task)); //appending array VALUE
    //create link with i inner html
    const link = document.createElement('a');
    link.className = 'delete-item second-content';
    link.href = '#';
    link.innerHTML = '<i class="fas fa-minus-circle"></i>';
    //append the link to the li tag
    li.appendChild(link);
    //..Now append the newly created element to the list
    list.appendChild(li);
    //this should loaded and displayed all data from local storage
  });
}

/* ADDING a NEW Task to UI & to localStorage */
function addTask(e){
  if (newTask.value === '') {
    alert('enter a new task');
  } else {
  //create new li element w/ classes and child link(<a>) element
  const li = document.createElement('li');
  li.className = "list-item";
  li.appendChild(document.createTextNode(newTask.value)); //appending input val
  //create a 'link tag' with an 'i tag' as inner html
  const link = document.createElement('a');
  link.className = 'delete-item second-content';
  link.href = '#';
  link.innerHTML = '<i class="fas fa-minus-circle"></i>'; //vector icon
  //append the link to the li tag
  li.appendChild(link);
  //..Now append the newly created list element to the list(ul)
  list.appendChild(li);
  /* set new task to local storage*/
  setNewTaskToLS(newTask.value); //calling another function
  //then, clear the input field
  newTask.value = '';
  e.preventDefault(); //prevent default behavior of form submittal
  }
}

/* setting a new task to localStorage */
function setNewTaskToLS(task){
  let tasks; //define a variable
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //add the 'task argument' to the current array
  tasks.push(task);
  //then set it back to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* Removing task item from UI and local storage */
function removeTask(e){
  //make sure e.target is the delete icon
  if (e.target.parentElement.classList.contains('delete-item')) {
    //now delete the whole <li>
    e.target.parentElement.parentElement.remove(); //from the i tag to li tag
    //remove from local storage as well
    removeTaskLS(e.target.parentElement.parentElement);
  }
}

/* function to remove from local storage */
function removeTaskLS(taskItem){
  //retrieve/define localstorage variable
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //iterating through tasks array grabbing value & index
  tasks.forEach(function(task,index){
    //parameter 'taskItem' is the e.target.parentElement.parentElement
    if (taskItem.innerText === task) { //if inerText match a value, remove LS
      tasks.splice(index,1); //grabbing the localStorage array and splicing of the CURRENT iteration
    }
  });
  //then we set the tasks array back to local storage with its updated
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

/* clearing all tasks items in UI and LS*/
function clearAllTasks(){
  while(list.firstChild){
    list.removeChild(list.firstChild);
  }
  //clear all localStorage
  clearLS();

}
/* clearing the localStorage */
function clearLS(){
  localStorage.clear();
}
