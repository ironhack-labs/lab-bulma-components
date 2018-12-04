import React, { Component } from "react";
import NavBar from "./Navbar/Navbar"
import FormField from "./FormField/FormField"
import CoolButton from "./CoolButton/CoolButton"


class SignUp extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <FormField />
      <CoolButton />
      </div>
      
    );
  }
}
// exporta APP
export default SignUp;