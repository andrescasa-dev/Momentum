export default async function showWeather(){
  try {
    const position = await getCoords();
    const weather = await getWeather(position)
    console.log(weather)
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
  const response = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
  const data = response.json();
  return data;
}