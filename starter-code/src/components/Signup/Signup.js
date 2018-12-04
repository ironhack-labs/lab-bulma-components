import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField />
        <CoolButton />
      </div>
    );
  }
}

export default Signup;
