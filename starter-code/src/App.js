import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Message from "./Message.js";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <form>
          <FormField type="text" placeholder="e.g Alex Smith">
            Name
          </FormField>
          <FormField type="email" placeholder="e.g. alexsmith@gmail.com">
            E-mail
          </FormField>
          <FormField type="password" placeholder="e.g. it's a secret">
            Password
          </FormField>
          <CoolButton isSmall isSuccess className="is-rounded my-class">
            Submit
          </CoolButton>
        </form>

        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default App;
