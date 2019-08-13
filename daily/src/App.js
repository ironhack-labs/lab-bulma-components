import React, { Component } from "react";
import Nav from "./components/Nav";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import "./App.css";
class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton className="button is-danger">Button 1</CoolButton>
        <CoolButton className="button is-success">Button 2</CoolButton>
      </main>
    );
  }
}
export default App;
