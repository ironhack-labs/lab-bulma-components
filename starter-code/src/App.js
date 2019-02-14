import React, { Component } from "react";

import BulmaNavbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class App extends Component {
  render() {
    return (
      <div>
        <BulmaNavbar />

        <FormField label="Email" type="email" placeholder="e.g alex@gmail.com" />
        <br></br>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <br></br>
        <FormField label="Password" type="password" placeholder="your secret password" />
        <br></br>
        <CoolButton class="button is-success" buttonlabel="Submit"/>
      
    
      </div>
    );
  }
}

export default App;
