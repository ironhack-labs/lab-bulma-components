import React, { Component } from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import "./App.css";

class SignForm extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="formbox">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g. Alex Gonzalez"
          />
          <FormField
            label="Email"
            type="email"
            placeholder="alexgonzalez13@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="Password" />
          <p class="control">
            <CoolButton Button isPrimary>Submit</CoolButton>
          </p>
        </div>
      </div>
    );
  }
}

export default SignForm;
