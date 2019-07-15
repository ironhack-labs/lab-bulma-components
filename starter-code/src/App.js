import React, { Component } from "react";
import NavbarBulma from "./NavbarBulma";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

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
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}
