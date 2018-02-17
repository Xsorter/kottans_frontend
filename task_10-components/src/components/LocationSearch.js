class LocationSearch {
    constructor() {
        this.state = {
            isValid : true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.host = document.createElement('div');
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
        if(!city.length){
            this.updateState({isValid: false})
        }
    }

    render() {
        const {isValid} = this.state;
        this.host.innerHTML = `
            <form class=${isValid ? '"weather-form"' : '"weather-form --invalid"'}>
                <input name="search" required class="search-weather">
                <button class="weather-search-submit">Search</button>
            </form>
        `;

        return this.host
    }

}


export default LocationSearch