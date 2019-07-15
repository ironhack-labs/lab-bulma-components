import React, { Component } from "react";
import NavbarBulma from "./NavbarBulma";
import FormField from "./FormField";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBulma />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    );
  }
}
