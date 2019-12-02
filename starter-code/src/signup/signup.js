import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import FormField from "../formField/formField.js";
import CoolButton from "../coolButton/coolButton.js";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form action="/" method="">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" />
          <CoolButton isSmall isPrimary className="is-rounded my-class">
            Submit
          </CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup;
