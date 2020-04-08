// signup/Signup.js

import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

import 'bulma/css/bulma.css';
import './Signup.css';

const Signup = props => {
  return (
    <div className='signup'>
      <Navbar />
      <form action='' method='post'>
        <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
        <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField label='Password' type='password' placeholder='••••••••••' />
        <CoolButton className='signup-button' isSuccess isMedium isRounded>Submit</CoolButton>
      </form>
    </div>
  )
}

export default Signup;
