import React, { Component } from "react";
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
      </div>
    );
  }
}

export default Signup;