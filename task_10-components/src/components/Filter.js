import { Component } from "../default/app";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.host = document.createElement("div");
    this.host.classList.add("filter");

    this.host.addEventListener("change", this.handleSubmit);
  }

  handleSubmit(e) {
    const period = document.getElementById("period").value;
    const units = document.getElementById("units").value;
    this.props.onSubmit(this.props.city, period, units);
  }

  render() {
    const { city, period, units } = this.props;

    return `
        <div class="filter__box">
            <label for="units">units:</label>
                <select name="units" id="units" value=${units}>
                    <option ${
                      units === "M" ? "selected" : ""
                    } value="M">Celcius</option>
                    <option ${
                      units === "I" ? "selected" : ""
                    } value="I">Fahrenheit</option>
                </select>
            </div>
        <div class="filter__box">
            <label for="period">period:</label>
            <select name="period" id="period" value=${period}>
                <option ${
                  period === "1" ? "selected" : ""
                } value="1">Today</option>
                <option ${
                  period === "2" ? "selected" : ""
                } value="2">2 days</option>
                <option ${
                  period === "4" ? "selected" : ""
                } value="4">4 days</option>
                <option ${
                  period === "7" ? "selected" : ""
                } value="7">One week</option>
                <option ${
                  period === "14" ? "selected" : ""
                } value="14">Two weeks</option>
            </select>
        </div>
        `;
  }
}

export default Filter;
