import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formField/FormField";
import CoolButton from "../coolButton/CoolButton";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="name" placeholder="e.g Alex Smith" />
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
      <CoolButton
        type="Submit"
        isSuccess
        className="is-rounded my-class"
      />
    </div>
  );
};

export default Signup;
