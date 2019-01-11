import React, { Component } from "react";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";
import FormField from "./FormField";
import Message from "./Message";

export default class Signup extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g Rainbow Flower"
          />
          <FormField
            label="Email"
            type="text"
            placeholder="e.g rainbow@lol.com"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="e.g supeRseCure"
          />
          <CoolButton isLink>Submit</CoolButton>
        </div>
        <div className="container"> <Message isInfo isSmall title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong>Pellentesque risus mi</strong>.
</Message></div>
       
      </div>
    );
  }
}
