import { Component } from "../default/app";
import LocationSearch from "./LocationSearch";
import Render from "../assets/js/render";
import Footer from "./Footer"

class App extends Component {
  constructor({ host }) {
    super();

    this.state = {
      city: new URLSearchParams(window.location.search).get("city") || ""
    };

    this.host = host;

    this.locationElement = new LocationSearch({
      city: this.state.city,
      onSubmit: this.onSearchSubmit
    });

    console.log(this.host);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.mainElement = new Render();
    this.footerElement = new Footer();
  }

  onSearchSubmit(city) {
    this.updateState({ city });
  }

  render() {
    const { city } = this.state;

    return [
      this.locationElement.update({ city, onSubmit: this.onSearchSubmit }),
      this.mainElement.render(),
      this.footerElement.update()
    ];
  }
}

export default App;
