import React from "react";
import Nav from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
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

      <CoolButton isSuccess className='is-rounded'>
        Submit
      </CoolButton>
    </div>
  );
};

export default Signup;