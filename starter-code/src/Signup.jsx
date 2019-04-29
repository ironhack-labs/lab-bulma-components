import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form action="/">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" />
          <CoolButton isSuccess isLarge>
            Login
          </CoolButton>
        </form>
      </div>
    );
  }
}
