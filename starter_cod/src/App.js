import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField />
        <CoolButton clase="button isDanger is-rounded is-danger" content="Button 1"/> 
        <CoolButton clase="button is-success" content="Button 2" />
        <Signup />

      </div>
    )
  }
}

export default App;
