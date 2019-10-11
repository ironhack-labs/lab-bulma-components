//https://reactjs.org/docs/components-and-props.html

import React, { Component } from "react";

import Nav from "./navbar";
import FormField from "./formfield.js";
import CoolButton from "./coolbutton";
import Message from "./message";


class Signup extends Component {
  
 

  render() {
    return (
      <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
      </div>
    );
  }
}

export default Signup;

