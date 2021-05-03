import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Signup.css";
import CoolButton from "../CoolButton/CoolButton";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="" />
        <CoolButton>Submit</CoolButton>
      </div>
    );
  }
}
