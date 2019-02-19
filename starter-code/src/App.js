import React, { Component } from "react";
//import "./App.css";
import "./Navbar";
import Navbar from "./Navbar";
import "./FormField";
import FormField from "./FormField";
import "./Signup";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField />
        <Signup />
      </div>
    );
  }
}

export default App;
