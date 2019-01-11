//User Interface class
function UI(){
}
UI.prototype.alert = function(type){
  let form = document.querySelector('.form');
  let div = document.createElement('div');
  div.className = `alert ${type}`;
  type == "success"? div.innerHTML = "<h6>sucessfully added task</h6>" : div.innerHTML = "<h6>error</h6>";
  form.appendChild(div);
  setTimeout(function(){ document.querySelector('.alert').remove()},2000);
}
UI.prototype.addTask = function(task){
  let list = document.querySelector('ul');
  let list_item = document.createElement('li')
  list_item.className = "item";
  list_item.innerHTML = `<a class="complete" href="#"><i class="fas fa-circle"></i></a>${task.taskValue}<span><a class="update" href="#"><i class="fas fa-pencil-alt"></i></a><a class="delete" href="#"><i class="fas fa-trash"></i></a></span>`;
  list.appendChild(list_item);
}
UI.prototype.deleteTask = function(e){
  e.target.parentElement.parentElement.parentElement.remove();
}
UI.prototype.clearField = function(){
  document.querySelector('input[name="task"]').value = '';
}
UI.prototype.completeTask = function(e,task){
  task.completed == true ? e.target.parentElement.parentElement.style.opacity = .5 : e.target.parentElement.parentElement.style.opacity = 1;
}
UI.prototype.edit = function(e){
  let current_list_item_tag = e.target.parentElement.parentElement.parentElement;
  let list_item_value = current_list_item_tag.textContent;
  //iterate through tag and remove all children
  while(current_list_item_tag.firstChild){
    current_list_item_tag.removeChild(current_list_item_tag.firstChild);
  }
  //create an input element and add link to save the edit
  let textarea = document.createElement('textarea');
  textarea.appendChild(document.createTextNode(list_item_value));
  //create a link to add at the end of the li
  let link = document.createElement('a');
  link.className = "updating";
  //create icon
  let icon = document.createElement('i');
  icon.className ="fas fa-pencil-alt";
  link.appendChild(icon);
  current_list_item_tag.appendChild(textarea);
  current_list_item_tag.appendChild(link);
}



//Task item class
class Task {
  constructor(taskV,complete){
    this.taskValue = taskV;
    this._completed = complete;
  }
  get completed(){
    return this._completed;
  }
  set completed(bool){
    this._completed = bool;
  }

}

//variables
let form = document.querySelector('.form');
let list_container = document.querySelector('.list-container');
const list =[];

/* EVENT LISTENERS */

//Hear for form input
form.addEventListener('submit',function(e){
  let taskValue = document.querySelector('input[name="task"]').value;
  const ui = new UI();

  if (taskValue == '') {
    ui.alert('error');
  } else {
    const task = new Task(taskValue,false);
    ui.addTask(task);
    ui.alert('success');
    ui.clearField();
    list.push(task);
  }
  e.preventDefault();
});

//Hear on the List and use event delegation
list_container.addEventListener('click',function(e){
  const ui = new UI();
  if (e.target.parentElement.className == 'delete') {
    ui.deleteTask(e);
  } else if (e.target.parentElement.className == 'complete') {
    var value = e.target.parentElement.parentElement.textContent;
    list.forEach(function(obj){
      if (obj.taskValue == value) {
        obj.completed == false ? obj.completed = true : obj.completed = false;
        ui.completeTask(e,obj);
      }
    });

  } else if (e.target.parentElement.className == 'update') {
      ui.edit(e);
  }
});
