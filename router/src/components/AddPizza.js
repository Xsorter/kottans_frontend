import {Component} from "../default/app"


class AddPizza extends Component {
    constructor() {
      super();
      this.state = {};
      this.host = document.createElement('div');
    }
  
    render() {      
      return `
        <div class="add-container">

            <h1>Add new pizza</h1>

            <div class="add-wrapper">
                <section>
                    <h3>Preview</h3>

                    <canvas width="320" height="320">
                    </canvas>
                </section>

                <section>
                    <h3>Pizza info</h3>

                    <form>
                        <input type="radio" checked name="pizza-size" id="size-small">
                        <label for="size-small">Pizza 30 inch</label>

                        <input type="radio" name="pizza-size" id="size-medium">
                        <label for="size-medium">Pizza 45 inch</label>

                        <input type="radio" name="pizza-size" id="size-big">
                        <label for="size-big">Pizza 60 inch</label>

                        <button>Submit</button>
                    </form>
                </section>
            </div>
            
        </div>
      `;
    }
  }
  
  export default AddPizza;
  