import React, { Component } from "react";
import "bulma/css/bulma.css";
import NavBar from "../navbar/Navbar.js";
import FormField from "../formfield/FormField.js";
import CoolButton from "../coolButton/CoolButton.js";

class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton
          styleClass="button is-danger"
          type="reset"
          value="Button 1"
        />
        <CoolButton
          styleClass="button is-success"
          type="submit"
          value="Button 2"
        />
      </div>
    );
  }
}

export default SignUp;
