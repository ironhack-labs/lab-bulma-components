import React, { Component } from "react";
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {

  render() {

    let formObjName = {
      label: `Name`,
      type: `text`,
      placeholder: `e.g Alex Smith`
    }
    let formObjEmail = {
      label: `Email`,
      type: `email`,
      placeholder: `e.g. alexsmith@gmail.com`
    }
    let formObjPassword = {
      label: `Password`,
      type: `password`,
    }

    return (
      <div>
        <Navbar />
        <FormField params={formObjName} />
        <FormField params={formObjEmail} />
        <FormField params={formObjPassword} />
        <CoolButton className="button is-success is-rounded is-small" />
      </div>

    );
  }
}

export default Signup;