import {Component} from "../default/app"

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null,
    };

    const {routes, host} = props;

    this.host = host;
    this.handleUrlChange = this.handleUrlChange.bind(this);

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );
    
    console.log('test');
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
