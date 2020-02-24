import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function Signup() {
  return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton className="button is-rounded my-class is-danger is-small">
        Button 1
      </CoolButton>
      <CoolButton className="button is-small is-success" text="">
        Button 2
      </CoolButton>
    </div>
  );
}

export default Signup;
