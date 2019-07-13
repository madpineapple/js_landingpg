let appId='insert key';
let units = 'Imperial';
let searchMethod;

function getsearchMethod(searchTerm){
  if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
  searchMethod = 'zip';
 else
   searchMethod = 'q';
}
function searchWeather(searchTerm){
  getsearchMethod(searchTerm);
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appId=${appId}&units=${units}`).then(result =>{
    return result.json();
  }).then(result=>{
    init(result);
  });
}

function init(resultFromServer){
  console.log(resultFromServer);


let weatherDescription = document.getElementById('weatherDescription');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('windSpeed');
let city = document.getElementById('city');
let icon = document.getElementById('icon');

icon.src='https://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

let resultDescription = resultFromServer.weather[0].description;
weatherDescription.innerText = resultDescription.charAt(0).toUpperCase()+ resultDescription.slice(1);

temperature.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176' //code for degree symbol //;
windSpeed.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
city.innerHTML = resultFromServer.name;
humidity.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';


}

document.getElementById('searchButton').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);

});
