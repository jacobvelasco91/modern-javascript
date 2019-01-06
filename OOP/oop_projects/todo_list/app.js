//task class
class Task {
  constructor(taskItem){
    this.taskItem = taskItem;
  }
}
//UI class
class UI {
  displayTasks(task){
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'delete';
    a.setAttribute('title','delete');
    a.setAttribute('href','#');
    a.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(document.createTextNode(task.taskItem));
    li.appendChild(a);
    list.appendChild(li);
  }
  deleteTask(target){
    target.parentElement.parentElement.remove();
  }
  deleteAll(){
    let list = document.querySelector('.task_list_box ul');
    let lis = document.querySelectorAll('li');
    console.log(lis.firstChild);
  }
}


const inputform = document.querySelector('#form');
let taskValue;
const ui = new UI();
let list = document.querySelector('.task_list_box');

/* EVENT LISTENERS */

// form/input
inputform.addEventListener('submit',function(e){
  taskValue = document.querySelector('input[name="task"]').value;
  const task = new Task(taskValue);
  ui.displayTasks(task);

  e.preventDefault();
});

//delete button
list.addEventListener('click',function(e){
  if (e.target.parentElement.classList.contains('delete')) {
   const ui = new UI();
   ui.deleteTask(e.target);
  }
  console.log(e.target);
});

//clear all tasks
document.querySelector('.delete_all').addEventListener('click',function(e){
  const ui = new UI();
  ui.deleteAll();
});
