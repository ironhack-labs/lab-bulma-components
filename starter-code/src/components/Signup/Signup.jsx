import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

const Signup = () => (
  <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField
      label="Email"
      type="email"
      placeholder="e.g. alexsmith@gmail.com"
    />
    <FormField label="Password" type="password" placeholder="*********" />
    <CoolButton
      btnArray={['isBig', 'isSuccess', 'isRounded']}
      className="my-class"
    >
      Submit
    </CoolButton>
  </div>
);

export default Signup;
