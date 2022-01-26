import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GoogleLoginComponent from "./googlebutton.component";

class App extends Component {

  render() {
    return (
      <div className="box" >
      <div className="App container">
        <h2>React Google Login Example</h2>
        <GoogleLoginComponent />
      </div>
      </div>
    );
  }
}
export default App;