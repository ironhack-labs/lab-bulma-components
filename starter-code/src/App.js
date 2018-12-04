import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar"
import FormField from "./components/FormField/FormField"
import CoolButton from "./components/CoolButton/CoolButton"
import Signup from "./components/Signup/Signup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
