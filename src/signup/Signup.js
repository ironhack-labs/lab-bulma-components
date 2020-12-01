import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="text" placeholder="pepito@hotmail.com" />
      <FormField label="Password" type="password" placeholder="******" />
      <CoolButton isSmall isSuccess>
        Submit
      </CoolButton>
    </div>
  );
}
