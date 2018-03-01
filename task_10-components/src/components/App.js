import { Component } from "../default/app";
import LocationSearch from "./LocationSearch";
import Render from "../assets/js/render";

import Filter from "./Filter";
import Footer from "./Footer";
import { findCity } from "./Search";

class App extends Component {
  constructor({ host }) {
    super();
    
    this.state = {
      city: new URLSearchParams(window.location.search).get("city") || "",
      period: 1,
      isLoaded: true
    };

    this.host = host;
    this.onSearchSubmit = this.onSearchSubmit.bind(this);

    this.locationElement = new LocationSearch({
      city: this.state.city,
      period: this.state.period,
      onSubmit: this.onSearchSubmit
    });
    this.filterElement = new Filter({
      city: this.state.city,
      period: this.state.period,
      onSubmit: this.onSearchSubmit
    });
    this.mainElement = new Render();
    this.footerElement = new Footer();


    console.log(this.props);
  }



  onSearchSubmit(city, period) {
    this.updateState({ city, period });
    findCity(city, period);
  }

  render() {
    const { city, period } = this.state;

    console.log(period);
    console.log(city);
    console.log(this.state);

    return [
      this.locationElement.update({ city, period, onSubmit: this.onSearchSubmit }),
      this.filterElement.update({ city, period, onSubmit: this.onSearchSubmit }),
      this.mainElement.render(),
      this.footerElement.update()
    ];
  }
}

export default App;
