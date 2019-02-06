//GitHub class request
class GitHub {
  constructor(){
    this.client_id = '';
    this.client_secret = '';
    this.per_page = 5;
    this.sort = 'create: asc';
  }
  getUser(username){
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
      .then(res => res.json())
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject('There was an'+err));
  }
  getRepos(username){
    const urlRepo = `https://api.github.com/users/${username}/repos?per_page=${this.per_page}&sort=${this.sort}`;
    return fetch(urlRepo)
      .then(res => res.json())
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject('There was an'+err));
  }
}
