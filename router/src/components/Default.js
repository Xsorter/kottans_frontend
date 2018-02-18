import {Component} from "../default/app"

class Default extends Component {
    constructor(props) {
      super(props);
      this.host = document.createElement('div');
    }
  
    render() {
      return `<div>Component Default</div>`;
    }
  }
  
  export default Default;
  