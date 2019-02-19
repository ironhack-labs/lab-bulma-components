import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton"
class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Navbar/>       
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <FormField label="Password" type="password" /> 
        <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
      </div>
    );
  }
}export default Signup;