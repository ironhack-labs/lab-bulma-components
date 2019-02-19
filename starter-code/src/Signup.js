import React, { Component } from "react";
import "bulma/css/bulma.css";
// import "./App.css";

// import Navbar from "./Navbar.js";
import FormField from "./Formfield";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
  render() {
    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      <div>
        <form>
          <FormField name="Name" />
          <FormField name="Email" />
          <FormField name="Password" />
          <CoolButton isSmall isSuccess name="Sign Up" />
        </form>
      </div>
    );
  }
}

export default Signup;
