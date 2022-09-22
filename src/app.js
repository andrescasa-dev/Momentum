import getBackgroundImage from "./events/getBackgroundImage.js";
import showCoins from "./events/showCoins.js";

class App{
  constructor(){
    this.listeners();
    getBackgroundImage();
    showCoins();
  }
  listeners(){

  }
}

new App();