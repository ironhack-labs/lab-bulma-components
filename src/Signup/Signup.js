import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="text" placeholder="Email" />
      <FormField label="Password" type="text" placeholder="Password" />

      <CoolButton className="button is-rounded" label="Submit" />
    </div>
  );
};

export default Signup;
