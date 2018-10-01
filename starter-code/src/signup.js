import React from "react";
import { FormField } from "./form.js";
import { Navbar } from "./navbar.js";
import { CoolButton } from "./button.js";

export const SignUp = () => {
  return (
    <div>
      <Navbar/>    
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email"type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="password" type="password" placeholder="super password"/>
      <CoolButton/>
      </div>
  );
};
