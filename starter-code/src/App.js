import React, { Component } from "react";

// import "./App.css";
import "bulma/css/bulma.css";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import SignUp from "./SignUp.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <SignUp />
      </div>
    );
  }
}

export default App;
