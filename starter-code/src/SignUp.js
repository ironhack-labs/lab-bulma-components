import React, { Component } from "react";
import CoolButton from "./CoolButton";
import NavComponent from "./NavComponent";
import FormField from "./FormField";

class SignUp extends Component {
  render() {
    return (
      <div >
        <NavComponent />
        <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="Type your password" />

        <CoolButton ClassButton="button is-success">Submit</CoolButton>

        </form>
      </div>
    );
  }
}

export default SignUp;
