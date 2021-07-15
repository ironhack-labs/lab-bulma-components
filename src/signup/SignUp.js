import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import './SignUp.css';


function SignUp() {
  return (
    <>
      <Navbar />
      <div className="form">
        <FormField label="Name" type="text" placeholder="Name" />
        <FormField label="Email" type="email" placeholder="Email" />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton cname="button is-danger">Submit</CoolButton> 
      </div> 
      
    </>
  );
};

export default SignUp;