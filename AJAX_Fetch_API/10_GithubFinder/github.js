//GitHub class request
class GitHub {
  constructor(){
    this.client_id = '';
    this.client_secret = '';
  }
  getUser(username){
    const user = {};
    const url = `https://api.github.com/users/${username}`;
    const profile = fetch(url)
      .then(res => res.json())
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject('There was an'+err));
    user.profile = profile;
    console.log(user);
    return user;
  }
}
