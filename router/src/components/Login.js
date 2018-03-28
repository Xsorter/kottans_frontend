import {Component} from "../default/app"


class Login extends Component {
    constructor() {
      super();

      this.state = {
        name: '',
        password: '',
      }

      this.host = document.createElement('div');
      this.loginUser = this.loginUser.bind(this);

      this.formHandle = this.formHandle.bind(this);
      this.host.addEventListener("submit", this.formHandle);
    }

    loginUser(){
      let data = {
        "username": this.state.name,
        "password": this.state.password,
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
          if(!!body.success){
            window.location.replace('#/')
          }
          throw new Error(body.validations);
        }
      })
      .catch(function(error){
        console.log(error) 
      })
      
    }

    formHandle(e){
      e.preventDefault();
      this.updateState( 
        { name: document.getElementById('name').value,
          password: document.getElementById('password').value
        }
      );
      this.loginUser();
      console.log(this.state);
    }
  
    render() {
      const { name, password } = this.state;
      
      return `
        <div class="center-flex">
          <div class="login">
            <form>
              <input type="text" id="name" value="${name}" placeholder="Enter your name">
              <input type="password" id="password" value="${password}" placeholder="Enter your password">
              <button class="button">login</button>
            </form>
            <a class="link" href="#/register">register</a>
          </div>
        </div>
      `;
    }
  }
  
  export default Login;
  