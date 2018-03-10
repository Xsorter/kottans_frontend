import {Component} from "../default/app"


class Login extends Component {
    constructor() {
      super();
      this.host = document.createElement('div');
      this.loginUser = this.loginUser.bind(this);
    }

    loginUser(){
      let data = {
        "username": "someone",
        "password": "qwerty12",
      }

      let header = new Headers();
      header.append('Content-Type', 'application/json');
      let method = 'POST';

      fetch(`https://pizza-tele.ga/api/v1/user/login`, {
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
  
    render() {
      this.loginUser();

      return `
        <div class="center-flex">
          <div class="login">
            <form>
              <input type="text" placeholder="Enter your name">
              <input type="text" placeholder="Enter your password">
              <button class="button">login</button>
            </form>
            <a class="link" href="#/register">register</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Login;
  