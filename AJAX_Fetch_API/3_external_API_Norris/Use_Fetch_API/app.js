/*
Fetching data from an external api using AJAX w/ the XMLHttpRequest API

Every API is different. The type of request it takes or GET , or POST...How it will repond


WE WILL FETCH MULTIPLE JOKES FROM THE API

url to find the API: http://www.icndb.com/api/
*/
document.getElementById('generator').addEventListener('click',getJoke);

function getJoke(e){
  const number = document.querySelector('input[type="number"]').value;

  //create url
  const url = `http://api.icndb.com/jokes/random/${number}`;
  //create fetch api request
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonData){
    loadDOM(jsonData);
    });

  e.preventDefault();
}

//Load dom with jokes
function loadDOM(data){
    const parent = document.getElementById('joke_box');
    let output = document.createElement('ul');
    data.value.forEach(function(jokeObj){
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(jokeObj.joke));
      output.appendChild(li);
    });
    parent.appendChild(output);

}
