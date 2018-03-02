import { Component } from "../default/app";
import LocationSearch from "./LocationSearch";
import Main from "./RenderWeather";
import Filter from "./Filter";
import Footer from "./Footer";
import { findCity } from "./Search";

class App extends Component {
  constructor({ host }) {
    super();

    this.state = {
      city: new URLSearchParams(window.location.search).get("city") || "",
      period: 1,
      units: "M",
      isLoaded: true
    };

    this.host = host;
    this.onSearchSubmit = this.onSearchSubmit.bind(this);

    this.locationElement = new LocationSearch({
      city: this.state.city,
      period: this.state.period,
      units: this.state.units,
      onSubmit: this.onSearchSubmit
    });
    this.filterElement = new Filter({
      city: this.state.city,
      period: this.state.period,
      units: this.state.units,
      onSubmit: this.onSearchSubmit
    });
    this.mainElement = new Main();
    this.footerElement = new Footer();
  }

  onSearchSubmit(city, period, units) {
    this.updateState({ city, period, units });
    findCity(city, period, units);
    this.pushUrl(city);
  }

  pushUrl(city) {
    let url = `index.html?city=${city}`;
    history.pushState(city, null, url);
    let parsedUrl = new URL(window.location.href);
  }

  render() {
    const { city, period, units } = this.state;

    return [
      this.locationElement.update({
        city,
        period,
        units,
        onSubmit: this.onSearchSubmit
      }),
      this.filterElement.update({
        city,
        period,
        units,
        onSubmit: this.onSearchSubmit
      }),
      this.mainElement.render(),
      this.footerElement.update()
    ];
  }
}

export default App;
