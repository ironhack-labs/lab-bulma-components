import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import FormField from "./components/FormField/FormField";
import CoolButton from "./components/CoolButton/CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Hello Ironhackers! </h1>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    );
  }
}

export default App;