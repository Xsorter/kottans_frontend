import {Component} from "../default/app"

class Register extends Component {
    constructor(props) {
      super(props);

      this.state = {
        store: []
      }

      this.host = document.createElement('div');
      this.getStores = this.getStores.bind(this);
    }
  

    getStores(){
      fetch(`https://pizza-tele.ga/api/v1/store/list`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(function(body) {
        if (body) {
          console.log(body);
          let stores = body;
          let select = document.createElement('select');
          return stores.map(function(store) {
            let option = document.createElement('option');
            option.innerHTML = `${store.name}`;
            option.value = store.id;
            select.appendChild(option);
            document.getElementById('form').appendChild(select);
          })
          
        }
      });
    }

    render() {
      this.getStores();
    
      return `
        <div class="center-flex">
          <div class="register">
            <form id="form">
              <input type="text" placeholder="Enter your name">
              <input type="password" placeholder="Enter your password">
              <input type="password" placeholder="Repeat your password">
              <input type="email" placeholder="Enter your email">
              <button class="button">Register</button>
            </form>
            <a class="link" href="#/login">login</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Register;
  