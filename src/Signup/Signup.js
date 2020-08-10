import React from "react";
import FormField from "../FormField/FormField";
import Navbar from "../navbar/Navbar";
import CoolButton from "../CoolButton/CoolButton";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="*****" />
        <CoolButton className="button is-info">Submit</CoolButton>
      </form>
    </div>
  );
};

export default Signup;
