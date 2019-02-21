import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      </div>
    );
  }
}

export default App;
