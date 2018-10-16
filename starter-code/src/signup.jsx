import React, { Component } from "react";
import Navbar from "./navbar.js"
import FormField from "./form.js"
import CoolButton from "./button.js"


class Signup extends Component {
  render(){
    return(
      <form>
        <FormField label="Nom" placeholder="Max martin" type="text" />
        <FormField label="Email" placeholder="max@yopmail.com" type="email" />
        <FormField label="Mot de passe" placeholder="passsword" type="password" />
        <CoolButton />
      </form>
    );
  }
}

export default Signup;
