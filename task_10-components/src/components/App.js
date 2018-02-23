import LocationSearch from "./LocationSearch";
import Render from "../assets/js/render";

class App{
  constructor(){
    this.locationElement = new LocationSearch();
    this.mainElement = new Render();

    this.rootElement = document.getElementById('root');
  }

  render(){
    this.rootElement.appendChild(this.locationElement.render());
    this.rootElement.appendChild(this.mainElement.render());
  }
}

export default App

