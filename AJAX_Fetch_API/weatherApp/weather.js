function Weather() {
  this.city = 'ontario';
  this.state = 'california';
  this.apiKey = 'Rzp4qYrxL7tyGyRLIc5MlvhDmP4eIzd8';
  this.locationKey;
  this.url =`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`;
}

Weather.prototype.getWeather = function() {
  //get location key
  return fetch(this.url)
  .then(res => res.json())
  .then(data => {
    data.forEach(location => {
      if (location.AdministrativeArea.LocalizedName.toLowerCase() == this.state) {
        this.locationKey = location.Key;
      }
    })
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${this.locationKey}?apikey=${this.apiKey}`)
  })
  .then(res1 => res1.json())
  .then(data1 => Promise.resolve(data1))
  .catch(err => Promise.reject(err));
}
