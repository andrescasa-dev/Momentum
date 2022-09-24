export default function Weather(weatherData){
  const {name, weather, main, sys} = weatherData
  const SCALE = '@2x';
  const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/'
  return `
  <div class="flex items-center gap-2">
        <div class="w-[1em] h-[1em] rounded rounded-md bg-gray-600">
        <img class="w-full" src="${OPEN_WEATHER_ICON_URL}${weather[0].icon}${SCALE}.png" alt="${weather[0].description}">
        </div>
        <span>${Math.round(main.temp)}C°</span>
  </div>
  <p class="text-[0.7em]">${name} ${sys.country}</p>
  `
}