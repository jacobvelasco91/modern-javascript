/*

  -takes time to process request since the above is not "ready" and since it is a asynchronous request, the file interpreter keeps loading console.log() is called without the request.get() returning the data.

*/
//We will first instantiate a new EasyHttp object from the EasyHttp class
//request now has access/linked to all the methods in the EasyHttp prototype.
const request = new EasyHttp();
// //GET POSTS
// //define the GET url for JSONplaceholder.typicode posts
// let url = 'https://jsonplaceholder.typicode.com/posts';
//
// request.get(url,function(err,posts){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(posts));
//   }
// }); //<- logs the response with a callback function

// //GET SINGLE POST
// //define the GET url for JSONplaceholder.typicode posts
// let url = 'https://jsonplaceholder.typicode.com/posts/1'; //<---new attribute
//
// //We will first instantiate a new EasyHttp object from the EasyHttp class
// const request = new EasyHttp();
//
// //request now has access/linked to all the methods in the EasyHttp prototype. Lets use .get(param)
// request.get(url,function(err,post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(post));
//   }
// }); //<- logs the response with a callback function

//Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// //POST request | takes 3 parameters  url,data,callback
// let url = 'https://jsonplaceholder.typicode.com/posts';
// request.post(url,data,function(err,response){
//   if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.parse(response));
//     }
// });

//PUT request <- this updates the data in the url underneath us.
let url = 'https://jsonplaceholder.typicode.com/posts/1';
request.put(url,data,function(err,response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
