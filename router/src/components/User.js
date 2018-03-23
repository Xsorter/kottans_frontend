import {Component} from "../default/app"


class User extends Component {
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
      
      return `
        <div class="center-flex">
          <div class="login">
            <h1>User info</h1>
          </div>
        </div>
      `;
    }
  }
  
  export default User;
  