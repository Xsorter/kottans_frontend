import {Component} from "../default/app"

class Filter extends Component{
    constructor(props){
        super(props);

        this.props = props;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('filter');
        
    
        this.host.addEventListener('change', this.handleSubmit);
        
        
    }

    handleSubmit(e){
        const period = document.getElementById('period').value;

        this.props.onSubmit(this.props.city, period);

        console.log(period);
        console.log(this.props);
    }

    render(){
        const {city, period} = this.props;

        return `
        <div class="filter__box">
            <label for="period">period:</label>
            <select name="period" id="period" value=${period}>
                <option value="1">Today</option>
                <option value="2">2 days</option>
                <option value="4">4 days</option>
                <option value="7">One week</option>
                <option value="14">Two weeks</option>
            </select>
        </div>
        `
    }
}

export default Filter;