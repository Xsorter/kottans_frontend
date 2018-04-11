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
                        <div>
                            <label for="name">Pizza and order name</label>
                            <input type="text" name="name" id="name" placeholder="Pizza and order name">
                        </div>

                        <div>
                            <h2>Pizza size</h2>
                            <input type="radio" checked name="pizza-size" id="size-small">
                            <label for="size-small">Pizza 30 inch</label>

                            <input type="radio" name="pizza-size" id="size-medium">
                            <label for="size-medium">Pizza 45 inch</label>

                            <input type="radio" name="pizza-size" id="size-big">
                            <label for="size-big">Pizza 60 inch</label>
                        </div>

                        <div>
                            <h2>Description</h2>
                            <textarea placeholder="Description">
                            
                            </textarea>
                        </div>

                        <div>
                            <p>Total price:  $33.00</p>
                        </div>

                        <div>
                            <button>Order</button>
                            <button type="button">Cancel</button>
                        </div>
                    </form>

                </section>
            </div>
            
        </div>
      `;
    }
  }
  
  export default AddPizza;
  