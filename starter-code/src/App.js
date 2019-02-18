import React, { Component } from "react";
import Navbar from "./Componets/Navbar/Navbar";
import FormField from "./Componets/FormField/FormField";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    );
  }
}
export default App;
