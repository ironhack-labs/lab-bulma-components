import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/Navbar";
import FormField from "../src/FormField";
import CoolButton from "../src/CoolButton"
import Signup from "../src/Singup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        
        <CoolButton className="button is-rounded my-class is-small is-danger" value="Button 1"/>
        <CoolButton className="button is-small is-success" value="Button 2"/>
        <hr></hr>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Insert your password" />
        <CoolButton className="button is-rounded my-class is-small is-danger" value="Submit"/>
      </div>

    );
  }
}
export default App;

