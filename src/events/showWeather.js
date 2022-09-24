import Weather from "../components/Weather.js";
import { OPEN_WEATHER_BASE_URL } from "../utils/constants.js";
import { d_weather } from "../utils/view.js";

export default async function showWeather(){
  try {
    const position = await getCoords();
    const weatherData = await getWeather(position)
    d_weather.innerHTML = Weather(weatherData);
  } catch (error) {
    console.error(error)
  }
}

function getCoords(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve (position),
    (err)=>reject(err));
  }) 
}


async function getWeather(position){
  const response = await fetch(`${OPEN_WEATHER_BASE_URL}/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
  const data = response.json();
  return data;
}
