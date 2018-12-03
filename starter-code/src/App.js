import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import FormField from "./components/FormField/FormField";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Hello Ironhackers! </h1>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
}

export default App;