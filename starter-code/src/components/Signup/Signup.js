import React, { Component } from "react";
import { throws } from "assert";

import NavBar from "./../NavBar/NavBar";
import FormField from "./../FormField/FormField";
import CoolButton from "./../CoolButton/CoolButton";

class Signup extends Component {

  render() {
    return (
      <div className="Signup">
        <NavBar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
      </div>
    );
  }
}

export default Signup;