
import React from "react";

import Navbar from "../components/navbar.js";
import FormField from "../components/form.js";
import CoolButton from "../components/Coolbutton";



const Signup = props => {
    return (
      <div className="App">
        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="password min. 8 chara." />
        <div className="align-left">
          <CoolButton
            isSmall
            isDanger
            className="button is-rounded my-class is-danger is-small"
          >
            Sign Up
          </CoolButton>
          <CoolButton
            align-left
            isSmall
            isDanger
            className="button is-small is-success "
          >
            <p>Login</p>
          </CoolButton>
        </div>
      </div>
    );
}

export default Signup