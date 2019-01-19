/*
Fetching data from an external api using AJAX w/ the XMLHttpRequest API 

Every API is different. The type of request it takes or GET , or POST...How it will repond


WE WILL FETCH MULTIPLE JOKES FROM THE API

url to find the API: http://www.icndb.com/api/
*/
document.getElementById('generator').addEventListener('click',getJoke);

function getJoke(e){
  const number = document.querySelector('input[type="number"]').value;

  //create a new XHR Object
  const xhr = new XMLHttpRequest();
  const url = `http://api.icndb.com/jokes/random/${number}`;
  //open request
  xhr.open("GET",url,true);
  //type of response you want
  xhr.responseType = "json";
  //send request
  xhr.send();
  //on progress
  // xhr.onprogress = function(){
  //   console.time("timer");
  // }
  //onload
  xhr.onload = function(){
    if (xhr.status == 200) {
      const response = xhr.response;
      if (response.type == 'success') {
        loadDOM(response);
      }
    }
  }

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
