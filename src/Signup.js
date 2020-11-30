import React from "react";
import FormField from "./formfield/FormField";

const Signup = () => {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />

      <FormField label="Email" type="email" placeholder="e.g. your email " />

      <FormField label="Password" type="password" placeholder="e.g" />
    </div>
  );
};

export default Signup;
