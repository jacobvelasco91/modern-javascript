//GitHub class request
class GitHub {
  constructor(){
    this.client_id = '';
    this.client_secret = '';
  }
  getUser(user){
    const url = `https://api.github.com/users/${user}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject('There was an'+err));
  }
}
