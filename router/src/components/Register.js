import {Component} from "../default/app"

class Register extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        password: '',
        passwordRepeat: '',
        email: '',
        store: ''
      }

    
      this.host = document.createElement('div');
      this.getStores = this.getStores.bind(this);
      this.createUser = this.createUser.bind(this);

      this.formHandle = this.formHandle.bind(this);

      this.host.addEventListener("submit", this.formHandle);
    }
  

    createUser(){
      let data = {
        "username": this.state.name,
        "password": this.state.password,
        "password_repeat": this.state.passwordRepeat,
        "email": this.state.email,
        "store_id": +this.state.store,
        "store_password": "qwerty11"
      }

      console.log(this.state);

      let header = new Headers();
      header.append('Content-Type', 'application/json');
      let method = 'POST';

      fetch(`https://pizza-tele.ga/api/v1/user/create`, {
        body: JSON.stringify(data),
        method: method,
        headers: header,
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
      .then(function(body) {
        if (body) {
          console.log(body);
          throw new Error(body.validations);
        }
      })
      .catch(function(error){
        console.log(error) 
      })
      
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
            select.id = 'store';
            document.getElementById('form').insertBefore(select, document.getElementById('form').childNodes[0]);
          })
          
        }
      });
    }


    
    formHandle(e){
      e.preventDefault();
      this.updateState( 
        { name: document.getElementById('name').value,
          password: document.getElementById('password').value,
          passwordRepeat: document.getElementById('password-repeat').value,
          email: document.getElementById('email').value,
          store: document.getElementById('store').value,
        }
      );
      this.createUser();
      console.log(this.state);
    }

    render() {
      const { name, password, passwordRepeat, email, store } = this.state;

      this.getStores();
      
      
      return `
        <div class="center-flex">
          <div class="register">
            <form id="form">
              <input type="text" value="${name}" id="name" placeholder="Enter your name">
              <input type="password" value="${password}" id="password" placeholder="Enter your password">
              <input type="password" value="${passwordRepeat}" id="password-repeat" placeholder="Repeat your password">
              <input type="email" value="${email}" id="email" placeholder="Enter your email">
              <button class="button">Register</button>
            </form>
            <a class="link" href="#/login">login</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Register;
  