import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

function SignUp() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isDanger className="button">Submit</CoolButton>  
    </>
  );
};

export default SignUp;