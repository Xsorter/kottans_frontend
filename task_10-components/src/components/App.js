import LocationSearch from "./LocationSearch";

class App{
  constructor(){
    this.location = new LocationSearch();
    this.rootElement = document.getElementById('root');
  }

  render(){
    this.rootElement.appendChild(this.location.render())
  }
}

export default App

