import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButtons";
import Message from "./Message.js";

class Signup extends Component {
  render() {
    return (
      <>
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="Alex smith" />
          <FormField label="email" type="text" placeholder="asmith@gmail.com" />
          <FormField label="password" type="text" placeholder="alexsmith1" />
          <CoolButton className="button is-rounded my-class is-success">
            Submit
          </CoolButton>
        </form>
        <Message className="is-info title" title="Hello!!!">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </>
    );
  }
}

export default Signup;
