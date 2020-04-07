import React from 'react';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';
import './signup.css';

function signup () {
  return (
    <div>
      <Navbar />
      <FormField name="Name" email="Email" password="Password" />
      <CoolButton buttonClass="button is-medium is-success signup-now-btn" buttonName='Sign Up Now' />
    </div>
  )
}

export default signup;