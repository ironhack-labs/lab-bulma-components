import React from "react";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField />
        <CoolButton title1="Submit" />
      </div>
    );
  }
}

export default Signup;
