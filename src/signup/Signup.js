import React from "react";
import CoolButton from "../coolButton/CoolButton";
import FormField from "../formfield/FormField";

function Signup() {
  return (
    <>
      <FormField label="Name" placeholder="Bob Ironhacker" type="text" />
      <FormField label="Email" placeholder="bob@ironhack.com" type="email" />
      <FormField label="Password" placeholder="*******" type="password" />
      <CoolButton color="is-info">Submit</CoolButton>
    </>
  );
}

export default Signup;
