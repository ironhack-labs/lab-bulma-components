import React, { Component } from "react";
import Navbar from "./Nav.js";
import FormField from "./FormField.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g alexsmith@gmail.com"
        />
      </div>
    );
  }
}

export default App;
