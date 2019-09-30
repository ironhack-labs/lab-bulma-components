import React, { Component } from "react";
import FormField from "./../FormField/FormField"
import CoolButton from "./../CoolButton/CoolButton"

export default class Signup extends Component {
  render() {
    return (
      <form action="#">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Your super secure password"
        />
        <div className="form-actions">
          <CoolButton className="is-info is-outlined google-button">Signup with Google</CoolButton>
          <CoolButton isPrimary>
            <strong>Signup</strong>
          </CoolButton>
        </div>
      </form>
    );
  }
}
