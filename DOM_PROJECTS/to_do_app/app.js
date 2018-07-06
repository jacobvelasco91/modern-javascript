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


/*** Functions ***/
function loadTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = []; //if there is no tasks key ; create an empty array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); //if key -> get then parse and shove into tasks ; it will become an array of things
  }
  // the 'task' parameter will pull the VALUE which we added
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

    //this should load all data from local storage
  });
}
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
  setLocalStorage(newTask.value); //calling another function
  //then, clear the input field
  newTask.value = '';
  e.preventDefault(); //prevent default behavior of form submittal
  }
}
function setLocalStorage(task){
  let tasks; //define a variable
  if (localStorage.getItem('tasks') === null) { //if no tasks KEY
    tasks = []; // set tasks to an empty array
  } else { //there is a KEY named 'tasks' , so we set tasks var to that
    tasks = JSON.parse(localStorage.getItem('tasks')); //we parse the JSON data
  }
  //add the new task to the tasks array
  tasks.push(task);
  //then set it back to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
  //make sure e.target is the delete icon
  if (e.target.parentElement.classList.contains('delete-item')) {
    //now delete the whole <li>
    e.target.parentElement.parentElement.remove();
    //remove from local storage as well
    removeLocalStorage(e.target.parentElement.parentElement);
  }
}
function removeLocalStorage(taskItem){
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
  //then we set the tasks array back to local storage with its updates
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearAllTasks(){
  while (list.firstChild){ //while loop faster; while true
    list.removeChild(list.firstChild);
  }

  //clear all localStorage
  clearLS();

}
function clearLS(){
  localStorage.clear();
}
