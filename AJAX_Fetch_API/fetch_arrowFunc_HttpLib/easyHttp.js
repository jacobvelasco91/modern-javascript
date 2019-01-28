/*
  Creating class for easyHttp
  - use fetch & arrow functions

  What ever the outcome or whatever the fetch API resolves to either it be a error or a success
  when we go to access that 'returned' fetch response the first '.then' will take the data or information.
  Unless we do we like we did below. The first .then will be the resolve, and the .catch will be the reject.
*/

class easyHttp {
  //GET METHOD
  get(url) {
    return fetch(url)
           .then(response => {
              if (response.ok == false) {
                throw Error('it is false');
              } else {
                return response.json();
              }
            })
            .then(data => {
              return Promise.resolve(data);
            })
            .catch(err => {
              return Promise.reject(err);
            })
  }

  //POST METHOD
  post(url,data) {
    return fetch(url,{
      method:"POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(confirm => Promise.resolve(confirm))
    .catch(err => Promise.reject(err));
  }

  //PUT METHOD
  put(url,data) {
    return fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(data) //sending the data over as a string
    })
    .then(res => res.json())
    .then(data => Promise.resolve(data))
    .catch(err => Promise.reject("there was an error: "+err))
  }

  //DELETE METHOD
  delete(url){
    return fetch(url,{
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "content-type":"application/json"
      }
    })
    .then(res => Promise.resolve('post was deleted'))
    .catch(err => Promise.reject(err))
  }
}
