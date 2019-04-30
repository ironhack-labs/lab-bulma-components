import React, { Component } from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <FormField />
        <FormField />
        <FormField />
        <CoolButton />
      </React.Fragment>
    );
  }
}
