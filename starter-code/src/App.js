import React, { Component } from "react";
import "bulma/css/bulma.css";
import './App.css';
import Buttons from "./Components/Buttons.js";
import Container from './Components/Container.js'
import CoolButton from "./Components/CoolButton.js";
import FormField from "./Components/FormField.js";
import Message from "./Components/Message.js";
import Nav from "./Components/Nav.js";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container className="container-form">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g Alex Smith"
            color="input"
          />
          <FormField
            label="E-mail"
            type="email"
            placeholder="e.g alexsmith@gmail.com"
            color="input"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="try your best"
            color="input"
          />
          <Buttons>
            <CoolButton isPrimary name="Submit" />
          </Buttons>

          <Message isInfo isSmall title="Hello Word">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
        </Container>
      </div>
    );
  }
}

export default App;
