import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="Email address" />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton classes="my-class is-success" title="Submit" />
      </form>
    </div>
  );
};

export default Signup;
