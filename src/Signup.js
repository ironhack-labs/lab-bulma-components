import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="****************" />
      <CoolButton classes={['isSmall','isSuccess','is-rounded','my-class']} number="Submit"></CoolButton>
    </div>
  )
};

export default Signup;


   