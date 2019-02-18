import React, { Component } from "react";
import NavBar from "./Navbar"
import FormField from "./Formfield"
import CoolButton from "./Coolbutton"

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
      <NavBar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Your password" />
      
      <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>

      </div>
    );
  }
}

export default SignUp;