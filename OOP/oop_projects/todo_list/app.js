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
    a.setAttribute('title','delete');
    a.setAttribute('href','#');
    a.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(document.createTextNode(task.taskItem));
    li.appendChild(a);
    list.appendChild(li);
  }
}




let inputForm = document.querySelector('#form');
//listen for form submital
inputForm.addEventListener('submit',function(e){
  let input = document.querySelector('input[name="task"]').value;
  const task = new Task(input);
  const ui = new UI();
  ui.displayTasks(task);
  e.preventDefault();
});
