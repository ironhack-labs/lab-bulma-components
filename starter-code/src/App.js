import React, { Component } from "react";
import Nav from "./components/Nav";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton className="is-rounded my-class is-small is-danger is-rounded">
          Button 1
        </CoolButton>
        <CoolButton className="is-small is-success">Button 2</CoolButton>
      </div>
    );
  }
}

export default App;
