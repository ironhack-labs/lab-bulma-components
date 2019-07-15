import React, { Component } from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. 12345678"
        />
        <CoolButton miriam="is-small is-success">Sign-up</CoolButton>
      </div>
    );
  }
}
