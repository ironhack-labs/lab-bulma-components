import React, { Component } from "react";
import Navbar from "./components/Navbar/index"
import FormField from "./components/FormField"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <FormField label="name" type="text" placeholder="e.g Alex Smith"></FormField>
        <FormField label="email" type="email" placeholder="email"></FormField>



      </div>
    );
  }
}

export default App;