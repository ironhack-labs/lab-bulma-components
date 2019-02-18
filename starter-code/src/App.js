import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"
import Signup from "./Signup"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Signup/>
      </div>
    );
  }
}

export default App;