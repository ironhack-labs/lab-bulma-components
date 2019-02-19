import React, { Component } from "react";
import "./App.css";
import NavBar from "../src/NavBar";
import FormField from "../src/FormField";
import CoolButton from "../src/CoolButton";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="button is-rounded my-class is-small is-danger" value="Button 1" />
        <CoolButton className="button is-small is-success" value="Button 2" />
      </div>
    );
  }
}
export default App;
