import React from "react";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Signup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="Password:" />
        <CoolButton />
      </React.Fragment>
    );
  }
}
