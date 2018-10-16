import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="***" />

        <CoolButton isSmall isLight className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isPrimary>Button 2</CoolButton>
      </div>
    );
  }
}

export default App;