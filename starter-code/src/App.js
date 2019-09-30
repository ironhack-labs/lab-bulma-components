import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButtonGreen from "./CoolButtonGreen";
import CoolButtonRed from "./CoolButtonRed";
import Signup from "./Signup";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>

        <Signup></Signup>
      </div>
    );
  }
}

export default App;
