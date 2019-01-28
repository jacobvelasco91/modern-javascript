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
  let output = '';

  //get request
  http.get(url)
    .then(data => {
      data.forEach(post => {
        output += `<li>${post.id}</li>`;
      })
      list.innerHTML = output;
    })
    .catch( err => console.log(err));
}


//POST FUNCTION
function post (){
  let data = {
    title: document.querySelector('.post input[name="title"]').value,
    body: document.querySelector('.post input[name="body"]').value
  }
  http.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('There was a:'+err);
    })

  //clear fields
  document.querySelector('.post input[name="title"]').value = '';
  document.querySelector('.post input[name="body"]').value = '';
}
//PUT FUNCTION
function put (){
  let data = {
    title: document.querySelector('.put input[name="title"]').value,
    body: document.querySelector('.put input[name="body"]').value
  }
  http.put('https://jsonplaceholder.typicode.com/posts/1',data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  //clear fields
  document.querySelector('.put input[name="title"]').value = '';
  document.querySelector('.put input[name="body"]').value = '';
}
//DELETE FUNCTION
function deleteRequest (){
  let input = document.querySelector('.delete input').value;
  let urlDelete = 'https://jsonplaceholder.typicode.com/posts/1';
  http.delete(urlDelete)
  .then(response => console.log(response))
  .catch(err => console.log(err));
}
