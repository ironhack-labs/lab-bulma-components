import React from 'react';
import Navbar from './../navbar/Navbar.js';
import bulma from 'bulma/css/bulma.css';
import FormField from './../formfield/FormField.js'
import CoolButton from './../button/Button'



const SignUp = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="******" />
      <CoolButton className="button is-small is-success" text="Sign-up">Button 2</CoolButton>  
    </>
  );
};

export default SignUp;