import React, { Component } from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. 1234" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      </div>
    );
  }
}

export default Signup; 