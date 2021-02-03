import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Pasword" type="password" placeholder="Pasword" />
        <CoolButton text="SignUp" class="is-link mt-1"></CoolButton>
      </div>
    </div>
  );
};

export default Signup;
