import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar.js";
import FormField from "./components/FormField.js";
import CoolButton from "./components/CoolButton.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CoolButton isSmall isDanger className="is-rounded my-class" />
        <CoolButton isLarge isPrimary className="is-rounded my-class" />

        <FormField
          labelName="Favourite Coffee"
          typeName="text"
          placeholderText="Americano"
        />
        <FormField
          labelName="Password"
          typeName="password"
          placeholderText="bob123"
        />
      </div>
    );
  }
}

export default App;
