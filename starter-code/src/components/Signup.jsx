import React, { Component } from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

export default class Signup extends Component {
  render() {
    return (
      <div className="signup">

        <NavBar/>
        <Container className="firstSection">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
          <FormField label="Password" type="password" placeholder="•••••••••••••"/>
          <CoolButton isPrimary className="is-rounded submitBtn">Submit</CoolButton>
        </Container>

      </div>
    );
  }
}
