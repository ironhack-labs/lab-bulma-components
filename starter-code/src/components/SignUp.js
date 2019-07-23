import React, { Fragment } from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import '../App.css';


const SignUp = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isWarning>Sign Up</CoolButton>
    </Fragment>
  )
}

export default SignUp;
