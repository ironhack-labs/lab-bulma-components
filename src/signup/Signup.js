import React from "react";
import Nav from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
      <CoolButton className="button is-primary" text="Submit" />
    </div>
  );
};
export default Signup;
