import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./App.css";
import Navbar from "./Navbar/Navbar"
import FormField from "./Formfield/Formfield"
import CoolButton from "./CoolButton/CoolButton"
import SignUpPage from "./SignUpPage/SignUpPage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"></FormField>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></FormField>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        <SignUpPage></SignUpPage>
      </div>
    );
  }
}

export default App;
