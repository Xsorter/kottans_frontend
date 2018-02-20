import LocationSearch from "./LocationSearch";

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

