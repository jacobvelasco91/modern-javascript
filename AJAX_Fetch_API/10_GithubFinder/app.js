//Init GitHub class
const github = new GitHub();
//Init UI class
const ui = new UI();
//Search input
const searchInput = document.getElementById('searchUser');

//Search input Event Listener
searchInput.addEventListener('keyup', (e) => {
  //Get Input Text
  let username = searchInput.value;

  if (username.trim() !== '') { //trimming any whitespace
    //Make Http Call
    github.getUser(username)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //Show UI Alert
        console.log('profile not found');
      } else {
        //Display UI Profile
        console.log(data.profile);
      }
    })
    .catch(err => console.log(err));
  }
});
