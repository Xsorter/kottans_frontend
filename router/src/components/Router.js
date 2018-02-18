import routes from "../utils/routes"
import {Component} from "../default/app"

class Router extends Component {
  constructor(host, routes) {
    super(host, routes);
    this.state = {

    }

    this.host = host;
    window.addEventListener('hashChange', this.handleUrlChange);
  }

  get (path){
    return window.location.hash.slice(1)
  }

  handleUrlChange(path){
    const {routes} = this.state;
    console.log('eee');
  }

  render() {
    
  }
}

export default Router;
