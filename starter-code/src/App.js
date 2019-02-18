import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import FormField from "./components/FormField/FormField";
import CoolButton from "./components/CoolButton/CoolButton";
import SignUp from "./components/Signup/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormField/>
        <CoolButton/>
        <SignUp/>
      </div>
    );
  }
}

export default App;
