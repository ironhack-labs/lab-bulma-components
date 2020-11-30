import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formField/FormField";
import CoolButton from "./coolButton/CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        
        
      </div>
    );
  }
}
