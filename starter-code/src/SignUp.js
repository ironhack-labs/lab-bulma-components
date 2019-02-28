import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <FormField placeholder="user"/>
        <FormField placeholder="user@gmail.com"/>
        <CoolButton text="Sign Up"/>
      </div>
    );
  }
}

export default SignUp;
