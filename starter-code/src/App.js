
import React, { Component } from "react";
import Navbar from "./components/NavBar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from "./components/Signup";


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="*******"
        />

        <CoolButton></CoolButton>
      </div>
    );
  }
}