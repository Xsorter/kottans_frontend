import { findCity } from "./Search";

class LocationSearch {
    constructor() {
        this.state = {
            isValid : true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.host = document.createElement('header');
        this.host.classList.add('location-wrapper');
        this.host.addEventListener('submit', this.handleSubmit);
    }

    

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this.render();
    }

    handleSubmit(e){
        e.preventDefault();
        const city = e.target.elements.search.value.trim();
        findCity(city);

        if(!city.length){
            this.updateState({isValid: false})
        }
    }

    render() {
        const {isValid} = this.state;
        this.host.innerHTML = `
            <h1 class="title">Weather-app</h1>
            <form class=${isValid ? '"weather-form"' : '"weather-form --invalid"'}>
                <div class="search">
                    <input name="search" required class="search-weather">
                    <button class="weather-search-submit">Search</button>.
                </div>
            </form>
        `;

        return this.host
    }

}


export default LocationSearch