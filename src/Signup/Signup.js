import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
      <div>
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="password" />
          <CoolButton isSmall className="is-rounded my-class">Signup</CoolButton>     
      </div>
    );
  }
  
  export default Signup;