import React, { Component } from "react";
import Navbar from "./NavBar/NavBar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton"
import "./App.css";
import SignUp from "./SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"></FormField>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></FormField>
        <CoolButton name="Button1" isSmall isDanger className="is-rounded my-class"></CoolButton>
        <CoolButton name="Button2" isSmall isSuccess></CoolButton> */}
        <SignUp></SignUp>
      </div>
    );
  }
}

export default App;
