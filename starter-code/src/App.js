import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import FormField from "./components/FormField.js";


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
