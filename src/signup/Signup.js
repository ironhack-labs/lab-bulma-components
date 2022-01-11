import React from "react";
import "./Signup.css";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div className="ctn-signup">
      <Navbar />
      <FormField label="Name" type="text" placeholder="Peter" />
      <FormField label="Email" type="email" placeholder="peter@aol.com" />
      <FormField label="Password" type="password" placeholder="**********" />
      <CoolButton>Submit</CoolButton>
    </div>
  );
};

export default Signup;
