import React from "react";

import Navbar from "./components/Navbar.js";
import FormField from "./components/FormField.js";
import CoolButton from "./components/CoolButton.js";

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
