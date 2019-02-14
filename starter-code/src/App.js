import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isDanger isRounded>Button1</CoolButton>
      <CoolButton isSmall isSuccess>Button2</CoolButton>
    </div>
    )
  }
}

export default App;