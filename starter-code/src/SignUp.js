import React, { Component } from "react";
import NavBar from "./NavBar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Coucou</h1>
        <FormField label="Name" type="text" placeholder="e.g. Jean Michou" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="it's a secret"
        />
        <CoolButton />
      </div>
    );
  }
}

export default SignUp;
