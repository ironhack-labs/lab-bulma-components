import React, { Component } from "react";
import { Navbar } from "./navbar.js";
import { FormField } from "./form.js";
import { CoolButton } from "./button.js";
import { SignUp } from "./signup.js";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email"type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <SignUp/>
    </div>
  );
};
