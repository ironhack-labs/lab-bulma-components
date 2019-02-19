import React, { Component } from "react";

import "./App.css";

import Navbar from "./Navbar.js";

import FormField from "./Formfield.js";

import CoolButton from "./Coolbutton.js";

const formField = {
  label: ["Name", "Email"],
  type: ["text", "email"],
  placeholder: ["e.g Alex Smith", ".g. alexsmith@gmail.com"]
};

class App extends Component {
  // every component class needs a render() method
  // (defines the component's content with the return)
  render() {
    return (
      <div>
        <Navbar />

        <FormField
          label={formField.label[0]}
          type={formField.type[0]}
          placeholder={formField.placeholder[0]}
        />

        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
export default App;
