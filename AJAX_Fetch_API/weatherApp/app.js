//Init weather
const weather = new Weather();

weather.getWeather()
.then(weather => {
  console.log(weather);
})
.catch(err => console.log(err));
