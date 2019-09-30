import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class FormField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. pass123" />
            <CoolButton>Submit</CoolButton>
        </div>
    );
  }
}