import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import "bulma/css/bulma.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <CoolButton className="is-rounded my-class isSmall isDanger">
      Button 1
    </CoolButton>
      </div>
    );
  }
}

export default Signup;