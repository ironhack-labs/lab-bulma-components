import React, { Component } from "react";

// import "./App.css";
import "bulma/css/bulma.css";

import Navbar from "./Navbar.js";
import FormField from "./formField.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField />
      </div>
    );
  }
}

export default App;
