import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Message from "./Message.js";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="Pepito Perez" />
          <FormField label="email" type="text" placeholder="pepito@gmail.com" />
          <FormField label="password" type="text" placeholder="pepitomola1" />
          <CoolButton className="button is-small is-success">Submit</CoolButton>
        </form>
        <Message className="is-info" title="ola amijo!">
          Esto es un mensaje
        </Message>
      </div>
    );
  }
}

export default Signup;
