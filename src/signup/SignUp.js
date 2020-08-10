import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="Password" placeholder="*****" />
      <CoolButton className="button is-small is-success" label="Submit" />
    </div>
  );
};

export default SignUp;
