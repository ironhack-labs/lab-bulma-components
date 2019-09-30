import React, { Component } from "react";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import FormField from "./FormField";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <FormField></FormField>
      </div>
    );
  }
}

export default App;
