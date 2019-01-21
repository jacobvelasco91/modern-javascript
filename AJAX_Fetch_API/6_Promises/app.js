/*

 PROMISES

*/

//returning a promise
function lessThanTen(num){
  return new Promise(function(resolve,reject){
    if (num<10) {
      resolve('less than ten');
    }
    reject('not less than ten');
  });
}

lessThanTen(20).then(function(resolve){
  console.log(resolve);
},function(reject){
  console.log(reject);
});
console.log(lessThanTen(7));

//USING PROMISES INSTEAD OF CALLBACKS IN CALLBACK EXAMPLE
/*
  1. create posts data array
  2. create a function to create the post and add it to the posts array
  3. let that take like 2 seconds and once it is done return a promise (or callback)
  4. create a function which displays on DOM after 1 second. it grabs and cycles through posts
*/
const posts = [
  {title:"Post one",body:"body of post one"},
  {title:"Post two",body:"body of post two"},
];

function createPost(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      if (typeof post != 'object') {
        reject('pass in an object');
      }
      posts.push(post);
      resolve();
    },2000);
  });
}

const newPost = {title:"New Post",body:"body of new Post"};

createPost(4)
.then(function(){console.log(posts);})
.catch(function(err){
  console.log(err);
});
