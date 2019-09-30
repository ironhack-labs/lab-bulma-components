import React, { Component } from "react";
import FormField from "./../FormField/FormField";
import CoolButton from "./../CoolButton/CoolButton";

export default class Login extends Component {
  render() {
    return (
      <form action="#">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Password"
          type="password"
          placeholder="Your super secure password"
        />
        <div className="form-actions">
          <CoolButton type="reset" className="is-info is-outlined google-button">Login with Google</CoolButton>
          <CoolButton isPrimary>
            <strong>Login</strong>
          </CoolButton>
        </div>
      </form>
    );
  }
}
