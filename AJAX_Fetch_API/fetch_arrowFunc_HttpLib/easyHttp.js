/*
  Creating class for easyHttp
  - use fetch & arrow functions
*/

class easyHttp {
  //GET METHOD
  getMethod(url) {
    return new Promise( (resolve,reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject('there was an error'));

    })
  }
}
