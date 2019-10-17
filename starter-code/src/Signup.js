// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form
import React, { Component } from "react";
import FormField from "./FormField";

class Signup extends Component {
  render() {
    return (
      <div className="SignupPage">
        <FormField name="Name" type="text" placeHolder="e.g Alex Smith" />
        <FormField name="Email" type="Email" placeHolder="e.g alex@gmail.com" />
        <FormField
          name="Password"
          type="password"
          placeHolder="Come up with something fancy"
        />
      </div>
    );
  }
}
export default Signup;
