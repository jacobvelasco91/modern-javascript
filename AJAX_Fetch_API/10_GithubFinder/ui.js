class UI {
  constructor(){
    this.profile_section = document.getElementById('profile');
    this.search_card = document.querySelector('.card');
  }

/*** SHOW ALERT ***/
  showAlert(profile_exist) { //passing a boolean
    if (document.querySelector('.alert')) { //alert exist already?
      document.querySelector('.alert').remove();
    }
    const div = document.createElement('div');
    div.className = 'alert';
    if (profile_exist) {
      div.className += ' profile_found';
      div.appendChild(document.createTextNode('Profile Found'));
      this.search_card.appendChild(div);
    } else {
      div.className += ' profile_not_found';
      div.appendChild(document.createTextNode('Profile Not Found'));
      this.search_card.appendChild(div);
    }
    this.removeAlert(div); //call remove Alert
  }
/*** REMOVE ALERT /timer ***/
  removeAlert(element){
    setTimeout(() => { element.remove()},2000);
  }

/*** DISPLAY PROFILE ***/
  displayProfile(profile_data) {
    this.profile_section.innerHTML = `
    <div class='left contain-profile'>
    <div class="contain">
      <div class="image-container">
        <img src="${profile_data.avatar_url}">
      </div>
      <div class="bio">
        <h4>Bio:</h4>
        <p>${profile_data.bio}</p>
      </div>
      <div class="view-profile-container">
        <a href="${profile_data.html_url}"><button>View Profile</button></a>
      </div>
      <div class="tags">
        <span>Followers:</span><span style="color:black;">${profile_data.followers}</span>
      </div>
      <div class="tags">
        <span>Following:</span><span style="color:black;">${profile_data.following}</span>
      </div>
      <p class="tags" style="color:gray;">location: ${profile_data.location}</p>
    </div>
    </div>
    `;
  }
/*** SHOW REPOS ***/
  showRepos(data) { //data will be an array of repositores : need to loop through the array
    let output = '';

    //Loop through the array
    data.forEach( (repo,index) => {
      output += `
       <div class="right">
         <div><a href="${repo.html_url}">${repo.name}</a></div>
         <div><span>Language: ${repo.language}</span><span>stargazers: ${repo.stargazers_count}</span></div>
       </div>
      `;
      this.profile_section.innerHTML += output;
    })
  }

}
