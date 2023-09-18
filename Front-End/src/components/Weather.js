import React, { useState } from 'react';
/*mport cloud_icon from './weatherAssets/cloud.png';
import wind_icon from "./weatherAssets/wind.png";
import snow_icon from "./weatherAssets/snow.png";
import rain_icon from "./weatherAssets/rain.png";
import drizzle_icon from "./weatherAssets/drizzle.png";
import humidity_icon from "./weatherAssets/humidity.png";
import clear_icon from "./weatherAssets/clear.png";

*/
function Weather() {

  let API_KEY = "f69705a12e9d39e10ebd94cff8ffab88";

const[wicon,setWicon] = useState("./weatherAssets/cloud.png");


const search = async() =>{
const element = document.getElementsByClassName("cityInput");
if(element[0].value==="")
{
  alert('Ju lutem shkruani qytetin!');
      {window.location.href="/weather"}
      
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${API_KEY}`;

let response = await fetch(url);
let data = await response.json();
const humidity = document.getElementsByClassName("humidity-percentage");
const wind = document.getElementsByClassName("wind-rate");
const temperature = document.getElementsByClassName("weather-temp");
const location = document.getElementsByClassName("weather-location");

humidity[0].innerHTML =data.main.humidity+" %";
wind[0].innerHTML= data.wind.speed+" km/h";
temperature[0].innerHTML= Math.round(data.main.temp)+" °C";
location[0].innerHTML= data.name;


if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
{
  setWicon('./weatherAssets/clear.png');
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
{
  setWicon('./weatherAssets/cloud.png');
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
{
  setWicon('./weatherAssets/drizzle.png');
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
{
  setWicon('./weatherAssets/drizzle.png');
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
{
  setWicon('./weatherAssets/rain.png');
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
{
  setWicon('./weatherAssets/rain.png');
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
{
  setWicon('./weatherAssets/snow.png');
}
else{
  setWicon('./weatherAssets/clear.png');
}

};


return(
<main className='weathermain'>
  <div className='weather-container'>
    <div className='top-bar'>
      <input type='text' className='cityInput' placeholder='Search'/>
   <div className='search-icon' onClick={()=>{search()}}>
<img id="search" src='./images/search.png'></img>
   </div>
    </div>
    <div className='weather-image'>
      <img src={wicon}></img>
    </div>
    <div className='weather-temp'>24°C</div>
    <div className='weather-location'>...</div>
    <div className="data-container">
      <div className="element">
        <img src="./images/humidity.png" alt="" className='icon'/>
        <div className="data">
        <div className="humidity-percentage">64%</div>
        <div className="humidityText">Humidity</div>
        </div>
</div>
        <div className="element">
        <img src="./images/wind.png" alt="" className='icon'/>
        <div className="data">
        <div className="wind-rate">18 km/h</div>
        <div className="humidityText">Wind Speed</div>
        </div>

      </div>
    </div>
  </div>
  <br></br> <br></br> <br></br>
  </main>


)

}




export default <Weather/>;
