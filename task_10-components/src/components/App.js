import LocationSearch from "./LocationSearch";
import { create } from "domain";

class App{
  constructor(){
    this.locationElement = new LocationSearch();
    this.rootElement = document.getElementById('root');
  }

  render(){
    this.rootElement.appendChild(this.locationElement.render());
  }
}

export default App

