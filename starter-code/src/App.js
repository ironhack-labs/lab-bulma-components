import React, { Component } from "react";
import "bulma/css/bulma.css";
import Nav from "./Components/Nav.js";
import FormField from "./Components/FormField.js";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g Alex Smith"
            color="input"
          />
          <FormField
            label="E-mail"
            type="email"
            placeholder="e.g alexsmith@gmail.com"
            color="input"
          />
        </div>
      </div>
    );
  }
}

export default App;
