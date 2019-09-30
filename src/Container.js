import React, { Component } from "react";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Message from "./Message.js";
import "./App.css";

class Container extends Component {
  render() {
    return (
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
          <br></br>
          <Message title="Message Box">This is a tiny box with a tiny message that says 'hello'.</Message>
        </div>
    );
  }
}

export default Container;
