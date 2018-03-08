import {Component} from "../default/app"


class Login extends Component {
    constructor() {
      super();
      this.host = document.createElement('div');
    }
  
    render() {
      return `
        <div>Component Login</div>
      `;
    }
  }
  
  export default Login;
  