import React, { Component } from "react";
import Barra from "./components/Navbar";
import Form from "./components/Form";
import CoolButton from "./components/CoolButton";

class Signup extends Component {
  render() {
    return (
      <div>
        <Barra />
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <Form
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <Form
          label="password"
          type="Number"
          placeholder="password"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class" nombre="Submit" />
      </div>
    );
  }
}

export default Signup;
