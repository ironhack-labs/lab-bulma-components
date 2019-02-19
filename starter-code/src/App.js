import React, { Component } from "react";
import NavBar from "./NavBar.js";
import FormField from "./FormField.js";
import SignUp from "./SignUp.js";

import CoolButton from "./CoolButton.js";

class App extends Component {
  render() {
    return (
      <section>
        <div>
          {" "}
          <NavBar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
        <div>
          <SignUp />
        </div>
      </section>
    );
  }
}

export default App;
