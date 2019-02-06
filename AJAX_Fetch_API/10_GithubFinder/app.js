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
      if(data.message === 'Not Found'){
        //Show UI Alert
        ui.showAlert(false);
        //Delete all previous profile data
        ui.profile_section.innerHTML = '';
      } else {
        //Show UI Alert
        ui.showAlert(true);
        //Display profile UI
        ui.displayProfile(data);
      }
    })
    .catch(err => {
      //Delete all previous profile data
      ui.profile_section.innerHTML = '';
      ui.showAlert(false);
      console.log(err)
    });

    //Make HTTP call to get repos
    github.getRepos(username)
    .then(data => {
      //show repo data
      ui.showRepos(data);
    })
    .catch(err => console.log(err));
  }
});
