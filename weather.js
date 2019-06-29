$(document).ready(function(){
  function weather() {
    var URL = "https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24";
    $.getJSON(URL, function(data){
      console.log(data);
    });
  }
  weather();
});
