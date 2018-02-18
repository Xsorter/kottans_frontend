import {Component} from "../default/app"


class Login extends Component {
    constructor(props) {
      super(props);
      this.host = document.createElement('div');
    }
  
    render() {
      return `<div>Component Login</div>`
    }
  }
  
  export default Login;
  