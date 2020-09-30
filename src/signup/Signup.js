import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label='Name' type='text' placeholder='e.g. Adam Smith' />
      <FormField label='Email' type='email' placeholder='e.g. adamsmith@gmail.com' />
      <FormField label='Password' type='password' placeholder='secret password' />
      <CoolButton isRound isPrimary isSmall>Signup</CoolButton>
    </div>
  )
}

export default Signup;