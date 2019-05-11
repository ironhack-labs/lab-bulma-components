import React, { Component } from "react";
import FormField from "../components/FormField";

class Form extends Component {
  state = {
    nameField: {
      label: "Name",
      type: "text",
      placeHolder: "e.g Alex Smith"
    },
    emailField: {
      label: "email",
      type: "email",
      placeHolder: "e.g. alexsmith@gmail.com"
    }
  };
  render() {
    const { nameField, emailField } = this.state;
    return (
      <form action="">
        <FormField {...nameField} />
        <FormField {...emailField} />
      </form>
    );
  }
}

export default Form;
