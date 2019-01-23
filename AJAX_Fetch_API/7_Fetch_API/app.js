/*
  Add event listeners to all three buttons
*/

//Text button
document.getElementById('text').addEventListener('click',getText);
//Json button
document.getElementById('json').addEventListener('click',getJson);
//API button
document.getElementById('api').addEventListener('click',getApi);

//Remember Fetch returns a promise | re-read promise notes if un familiar

//function getText
function getText(){
  //enter file as an argument into the fetch function
  fetch('./data/testText.txt')
    .then(function(response){
      return response.text(); //going to return a promise with a value of our text
    })
    .then(function(data){
      document.getElementById('output').textContent = `${data}`;
    })
    .catch(function(err){ //catching an error
      console.log(err);
    });
}

//Function getJson
function getJson(){
  //enter file as an argument into the fetch function
  fetch('./data/posts.json')
    .then(function(response){
      return response.json(); //going to return a promise with a value of our text
    })
    .then(function(data){
      let output = '';
      data.forEach(function(post){
        output += `${post.title} ${post.body}`;
      });
      document.getElementById('output').textContent = output;
    })
    .catch(function(err){ //catching an error
      console.log(err);
    });
}

function getApi(){
  fetch('https://api.github.com/users')
    .then(function(response){
      return response.json(); //we have to return the data
    })
    .then(function(data){
      let output = '';
      data.forEach(function(user){
        output += `${user.id} ${user.login}`;
      });
      document.getElementById('output').textContent = output;
    });
}
