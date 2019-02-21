import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
  render() {
      return (
        <div className="container">
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="text" placeholder="e.g alexsmith@posteo.de" />
          <FormField label="Password" type="password" placeholder="Your password" />
          <CoolButton isSmall isSuccess>Submit</CoolButton>
        </div>
      )
  }
}

export default Signup;