import getBackgroundImage from "./events/getBackgroundImage.js";
import showCoins from "./events/showCoins.js";
import ShowCurrentTime from "./events/showCurrentTime.js";
import showWeather from "./events/showWeather.js";

class App{
  constructor(){
    this.listeners();
    // setInterval(ShowCurrentTime,1000);
    // getBackgroundImage();
    // showCoins();
    showWeather();
  }
  listeners(){

  }
}

new App();