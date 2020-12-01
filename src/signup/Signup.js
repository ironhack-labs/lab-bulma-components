import React from "react";
import Formfield from "../formfield/Formfield";
import Navbar from "../navbar/Navbar";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <form>
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Formfield label="Password" type="password" />
      <CoolButton isInfo>Submit</CoolButton>
    </form>
  );
};

export default Signup;
