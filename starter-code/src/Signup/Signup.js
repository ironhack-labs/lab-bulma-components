import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import FormField from "../FormField/FormField";
import SpecialButton from "../SpecialButton/SpecialButton";
import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div id="signupContainer">
        <Navigation></Navigation>
        <FormField label="Name" buttonPlaceholder="Eduardo"></FormField>
        <FormField label="Email" buttonPlaceholder="asdf@gmail.com"></FormField>
        <FormField label="Password" buttonPlaceholder="0123456789"></FormField>
        <div id="coolButtonContainer">
          <SpecialButton color="green" buttonName="Cool button"></SpecialButton>
        </div>
      </div>
    );
  }
}
