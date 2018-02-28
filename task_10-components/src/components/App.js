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

    this.locationElement = new LocationSearch({
      city: this.state.city,
      onSubmit: this.onSearchSubmit
    });

    console.log(this.host);
    console.log(this.props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.filterElement = new Filter({
      period: this.state.period,
      onSubmit: this.onSearchSubmit
    });
    this.mainElement = new Render();
    this.footerElement = new Footer();
  }



  onSearchSubmit(city) {
    this.updateState({ city });
    findCity(city);
  }

  render() {
    const { city, period } = this.state;


    return [
      this.locationElement.update({ city, onSubmit: this.onSearchSubmit }),
      this.filterElement.update({ period, onSubmit: this.onSearchSubmit }),
      this.mainElement.render(),
      this.footerElement.update()
    ];
  }
}

export default App;
