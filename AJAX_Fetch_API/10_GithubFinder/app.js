//Init GitHub class
const github = new GitHub();
//Search input
const searchInput = document.getElementById('searchUser');

//Search input Event Listener
searchInput.addEventListener('keyup', (e) => {
  //Get Input Text
  let user = searchInput.value;

  if (user.trim() !== '') { //trimming any whitespace
    //Make Http Call
    github.getUser(user)
    .then(data => {
      if(data.message === 'Not Found'){
        //Show UI Alert
        console.log('profile not found');
      } else {
        //Display UI Profile
        console.log(data);
      }
    })
    .catch(err => console.log(err));
  }
});
