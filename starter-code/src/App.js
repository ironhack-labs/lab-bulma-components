import React, { Component } from "react";
// import "./App.css";
import Navbar from "../components/Navbar.js";
import FormField from "../components/FormField.js";
import CoolButton from "../components/CoolButton.js";
import Signup from "../components/Signup.js";
import Message from "../components/Message.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="main">
          <h6>Login</h6>
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
          <h6>Signup</h6>
          <Signup />
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong> Pellentesque risus mi</strong>.
          </Message>
        </div>
      </div>
    );
  }
}

export default App;
