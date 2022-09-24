export default function Weather(weatherData){
  const {name, weather, main, sys} = weatherData
  const SCALE = '';
  const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/'
  return `
  <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded rounded-md bg-gray-600">
        <img src="${OPEN_WEATHER_ICON_URL}${weather[0].icon}${SCALE}.png" alt="${weather[0].description}">
        </div>
        <span>${Math.floor(main.temp)}C°</span>
      </div>
      <p class="text-sm">${name} ${sys.country}</p>
  `
}