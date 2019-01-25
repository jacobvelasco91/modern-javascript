//Add Event Listeners to all 4 buttons on the page
document.querySelector('.get button').addEventListener('click',get);
document.querySelector('.post button').addEventListener('click',post);
document.querySelector('.put button').addEventListener('click',put);
document.querySelector('.delete button').addEventListener('click',deleteRequest);


//instantiate easyHttp
const http = new easyHttp();


/** FUNCTIONS FOR EVENT LISTENERS  ***/

//GET FUNCTION
function get (){
  //DOM ELEMENTS
  let url = document.querySelector('.get input[name="url"]').value;
  let list = document.querySelector('.get ul');

  //invoke the .getMethod from te easyHttp prototype
  http.getMethod(url)
    .then(data => console.log(data) )
    .catch(err => console.log(err) );


}


//POST FUNCTION
function post (){
  let input = {
    title: document.querySelector('.post input[name="title"]').value,
    body: document.querySelector('.post input[name="body"]').value
  }
  console.log(`${input.title} ${input.body}`);
  //clear fields
  document.querySelector('.post input[name="title"]').value = '';
  document.querySelector('.post input[name="body"]').value = '';
}
//PUT FUNCTION
function put (){
  let input = {
    title: document.querySelector('.put input[name="title"]').value,
    body: document.querySelector('.put input[name="body"]').value
  }
  console.log(`${input.title} ${input.body}`);
  //clear fields
  document.querySelector('.put input[name="title"]').value = '';
  document.querySelector('.put input[name="body"]').value = '';
}
//DELETE FUNCTION
function deleteRequest (){
  let input = document.querySelector('.delete input').value;
  console.log(input);
}
