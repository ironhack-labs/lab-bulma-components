import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButtonGreen from "./CoolButtonGreen";

class Signup extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
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
        <CoolButtonGreen name="Submit"></CoolButtonGreen>
        
      </div>
    );
  }
}

export default Signup;