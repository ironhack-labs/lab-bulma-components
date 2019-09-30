import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Container from "./Container";  
import Message from "./Message";

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