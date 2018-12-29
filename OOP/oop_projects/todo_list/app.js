function Task(){
  this.task;
}
Task.prototype.setTask = function(){
  this.task = document.querySelector('input[name="task"]').value;
  console.log(this.task);
}
//Listen for the task form sumbit
let task_input = document.querySelector('#form');

task_input.addEventListener("submit",function(e){
  const task = new Task();
  task.setTask();
  e.preventDefault();
});


console.log('hello');
