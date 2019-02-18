import React, {Component} from "react";
import "./App.css";
import NavBar from "./Navbar.js"
import FormField from "./Formfield.js"
import CoolButton from "./Coolbutton.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    );
  }
}

export default App;