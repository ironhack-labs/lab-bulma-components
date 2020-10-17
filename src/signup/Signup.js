import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar.js";
import FormField from "../formfield/FormField.js";
import CoolButton from "../coolbutton/CoolButton.js";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <FormField />
      <FormField
        label="Password"
        name="Password"
        type="password"
        placeholder="***"
      />
      <CoolButton type="sybmit">Submit</CoolButton>
    </div>
  );
}
