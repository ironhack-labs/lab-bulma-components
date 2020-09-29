import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

function Signup() {
  return (
    <>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="*******" />
      <CoolButton className="button is-rounded my-class is-black buttonForm">
        Submit
      </CoolButton>
    </>
  );
}

export default SignUp;
