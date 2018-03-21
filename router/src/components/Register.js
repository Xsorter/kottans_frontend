import {Component} from "../default/app"

class Register extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        password: ''
      }

    
      this.host = document.createElement('div');
      this.getStores = this.getStores.bind(this);
      this.createUser = this.createUser.bind(this);

      this.formHandle = this.formHandle.bind(this);

      this.host.addEventListener("submit", this.formHandle);
    }
  

    createUser(){
      let data = {
        "username": "someone",
        "password": "qwerty12",
        "password_repeat": "qwerty12",
        "email": "some@gmail.com",
        "store_id": 5,
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
            document.getElementById('form').insertBefore(select, document.getElementById('form').childNodes[0]);
          })
          
        }
      });
    }


    
    formHandle(e){
      e.preventDefault();
      this.updateState( 
        { name: document.getElementById('name').value,
          password: document.getElementById('password').value
        }
      );
      console.log(this.state);
    }

    render() {
      const { name, password } = this.state;

      this.getStores();
      this.createUser();
      
      return `
        <div class="center-flex">
          <div class="register">
            <form id="form">
              <input type="text" value="${name}" id="name" placeholder="Enter your name">
              <input type="password" value="${password}" id="password" placeholder="Enter your password">
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
  