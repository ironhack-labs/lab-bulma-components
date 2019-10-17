import React, { Component } from "react";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="name" type="text" ph="e.g Peter Pan"></FormField>
        <FormField label="email" type="text" ph="e.g Peter Pan"></FormField>
        <FormField label="password" type="password" ph="password"></FormField>
        <CoolButton
          type="button is-small is-success"
          name="Click here for signup"
        />
      </div>
    );
  }
}
