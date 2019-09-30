import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormField></FormField>
        <br></br>
        <CoolButton className="button is-success" text="Send"></CoolButton>
      </div>
    );
  }
}
