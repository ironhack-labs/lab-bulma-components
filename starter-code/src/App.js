import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import FormContainer from "./FormContainer";
import CoolButton from "./CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <FormContainer label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormContainer
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormContainer
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <CoolButton className="button is-success is-rounded my-class">
          Login
        </CoolButton>
      </div>
    );
  }
}

export default App;
