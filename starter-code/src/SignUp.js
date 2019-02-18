import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class SignUp extends Component {
  render() {
    // console.log(this.props);

    // const { className, children} = this.props;

    return (
      <div>
        <Navbar />
        <FormField 
          label="Name" 
          type="text" 
          placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Pick a strong password PLZ"
        />
        <CoolButton className="button is-small is-primary" >
          <span>Submit</span>
        </CoolButton>
      </div>
    );
  }
}

export default SignUp;


