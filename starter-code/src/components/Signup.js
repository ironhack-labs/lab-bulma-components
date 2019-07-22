import React, { Fragment } from 'react';
import Navbar from './Navbar';
import FormField from './Formfield';
import CoolButton from './CoolButton';

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Your password" />
      <CoolButton isInfo isRounded>Sign Up</CoolButton>
    </Fragment>
    )
}

export default Signup;
