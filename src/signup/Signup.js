import React from "react";
import Nav from "../navbar/Navbar.js";
import FormField from "../formfield/FormField.js";
import CoolButton from "../button/CoolButton.js";
import "bulma/css/bulma.css";

const Signup = (props) => {
  return (
    <div>
      <Nav />
      <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
      <FormField
        label='Email'
        type='email'
        placeholder='e.g. alexsmith@gmail.com'
      />

      <CoolButton isActive>Submit</CoolButton>
    </div>
  );
};

export default Signup;
