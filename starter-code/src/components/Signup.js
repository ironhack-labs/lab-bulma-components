import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*****" />
      </div>
    )
  }
}

export default Signup;

// A CoolButton for submitting the form