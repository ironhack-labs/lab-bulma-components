import React, { Component } from "react";
import NavBar from "./NavBar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import SignUp from "./SignUp.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        <SignUp />
      </div>
    );
  }
}

export default App;