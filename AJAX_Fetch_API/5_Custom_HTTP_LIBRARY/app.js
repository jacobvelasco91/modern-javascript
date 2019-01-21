/***  CONSTANT VARIABLES  ***/
//easyHttp object
const http = new Easyhttp();
//get url
let url = 'https://jsonplaceholder.typicode.com/posts';
//post url
let post_url = 'https://jsonplaceholder.typicode.com/posts';
//data object
const data = {
  title: "Post one",
  body: "Body of post one"
}

//GET REQUEST
http.get(url,function(err,response){
  console.log(response);
});

//POST REQUEST
http.post(post_url,data,function(err,posts){
  if (err) { //if err came back true
    console.log(err);
  } else {
    console.log(posts);
  }
});

//PUT REQUEST
//changing
let put_url = 'https://jsonplaceholder.typicode.com/posts/10';
http.put(put_url,data,function(err,response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

//DELETE REQUEST
url += '/1';
http.delete(url,function(err,response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
