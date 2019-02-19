import React, { Component } from "react";

import Navbar from "../components/Navbar.js";
import FormField from "../components/FormField.js";
import CoolButton from "../components/CoolButton.js";
import Signup from "../components/Signup.js";
import Container from "../components/Container.js";
import Message from "../components/Message.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        <Signup />

        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default App;
