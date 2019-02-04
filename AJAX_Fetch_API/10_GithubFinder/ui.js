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
    <div class='left'>
      <img src="${profile_data.avatar_url}"><br>
      <div>
        <a href="${profile_data.html_url}">View Profile</a>
      </div>
      <div><span class="tag">Followers: ${profile_data.followers}</span><span class="tag">Following: ${profile_data.following}</span>
      </div>
      <p>location: ${profile_data.location}</p>
    </div>
    <div class="right">
      <div class="right-inner-top">
       <h3>${profile_data.name}</h3>
       <p>${profile_data.bio}</p>
      </div>
      <div>
        <h4>Repos</h4>
        <ul></ul>
      </div>
    </div>
    `;
  }

}
