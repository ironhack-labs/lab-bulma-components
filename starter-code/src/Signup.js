import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function SignUp() {
  return (
    <div>
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label = "Password" type = "password" placeholder = "Enter password" />
      <CoolButton className="button is-big is-success is-rounded">Submit</CoolButton>
    </div>
  );
}

export default SignUp;
