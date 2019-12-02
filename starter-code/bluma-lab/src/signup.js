import React from "react";
import "./App.css";

import FormField from "./components/form.js";
import CoolButton from "./components/Button.js";
import "bulma/css/bulma.css";

function Signup() {
  return (
    <div>
      <Navbar className="gray-nav"></Navbar>

      <FormField label="Username" type="text" placeholder="e.g Alex07" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <FormField label="Password" type="password"/>

      <CoolButton className="button is-rounded my-class is-danger is-small">Signup</CoolButton>
     
    </div>
  );
}

export default Signup;
