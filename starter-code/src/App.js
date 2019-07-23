import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton is-small is-success className="button is-danger">Submit</CoolButton>
      </Container>
    );
  }
}

export default App;
