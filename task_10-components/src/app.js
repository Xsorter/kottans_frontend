import "./assets/sass/app.sass";
import App from "./components/App";

let appStart = new App({ host: document.getElementById('root')});
appStart.update();
