import React, { Component } from "react";

import Navbar from "../components/Navbar.js";
import FormField from "../components/FormField.js";
import CoolButton from "../components/CoolButton.js";

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Navbar />

        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="e.g. *********"
          />

          <CoolButton isInfo className="is-rounded">
            Submit
          </CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup;
