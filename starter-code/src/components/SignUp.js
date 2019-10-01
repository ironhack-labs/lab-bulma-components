import React, { Component } from "react";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Container from "./Container";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavBar></NavBar>
          <form action="/">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
              label="Email"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
            <FormField label="Password" type="password" placeholder="******" />
            <CoolButton isPrimary>Submit</CoolButton>
          </form>
        </Container>
      </div>
    );
  }
}
