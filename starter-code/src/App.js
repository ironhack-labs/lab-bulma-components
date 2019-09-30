import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Message from "./Message";
import Container from "./Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <FormField />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isDanger isRounded>
          Button 1
        </CoolButton>

        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        <Signup />

        <Container>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </Fragment>
    );
  }
}

export default App;
