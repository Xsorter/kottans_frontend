import { Component } from "../default/app"
import { findCity } from "./Search";
import "../assets/media/loader.svg";

class LocationSearch extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isValid : true
        }
        this.props = props;

        this.handleSubmit = this.handleSubmit.bind(this);

        this.host = document.createElement('header');
        this.host.classList.add('location-wrapper');
        this.host.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit(e){
        e.preventDefault();
        const city = e.target.elements.search.value.trim();
        if(!city.length){
            this.updateState({isValid: false})
        }else{
            this.props.onSubmit(city)
        }
    }

    render() {
        const {isValid} = this.state;
        const {city} = this.props;
        console.log(this.props);
        
        return `
            <div class="loader none">
                <object data="assets/media/loader.svg"></object>
            </div>
            <h1 class="title">Weather-app</h1>
            <form class=${isValid ? '"weather-form"' : '"weather-form --invalid"'}>
                <div class="search">
                    <input name="search" required class="search-weather" value="${city}">
                    <button class="weather-search-submit">Search</button>.
                </div>
            </form>
        `;

    }

}


export default LocationSearch