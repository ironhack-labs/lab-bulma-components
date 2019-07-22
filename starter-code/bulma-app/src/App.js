import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FormField from "./components/Form";
import CoolButton from "./components/CoolButton";

class App extends Component {
  render() {
    return (
      <div className="intro">
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton isSmall isDanger is-rounded name="button 1" />
        <CoolButton isSmall isSuccess is-rounded name="button 2" />
      </div>
    );
  }
}

export default App;
