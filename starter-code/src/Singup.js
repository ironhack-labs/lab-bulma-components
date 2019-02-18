import React, { Component } from "react";
import FormField from "../src/FormField";
import CoolButton from "../src/CoolButton"
import "./App.css";

class Signup extends Component {
  render() {
    return (
        <div class="form">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton className="button is-small is-success" value="Send"/>
        </div>
    );
  }
}
export default Signup;



