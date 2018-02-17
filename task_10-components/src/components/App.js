import LocationSearch from "./LocationSearch";
import Render from "../assets/js/render";

class App{
  constructor(){
    this.state = {
      city: new URLSearchParams(window.location.search).get('city') || ''
    };
    
    this.locationElement = new LocationSearch({
      city: this.state.city,
      onSubmit: this.onSearchSubmit
    });

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.mainElement = new Render();
    this.host = document.getElementById('root');
  }


  updateState(nextState){
    this.state = Object.assign({}, this.state, nextState);
    this.render();
  }

  onSearchSubmit(city){
    this.updateState({ city });
  }

  render(){
    const {city} = this.state;
    this.host.innerHTML = '';

    this.host.appendChild(this.locationElement.update({
      city,
      onSubmit: this.onSearchSubmit
    }));

    this.host.appendChild(this.mainElement.render());
    return this.host
  }

}

export default App

