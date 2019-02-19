import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton"
import Signup from "./Signup"
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar/>       
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess >Button 2</CoolButton>
        <Signup/>
      </div>
    );
  }
}export default App;