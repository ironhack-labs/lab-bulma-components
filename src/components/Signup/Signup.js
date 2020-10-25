import React from 'react';

import './Signup.css';

import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';
import Message from '../Message/Message'

const Signup = () => {
  return (
    <div>
      <Navbar />

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Your Strong Password"
      />

      <CoolButton isActive isLarge isPrimary isRounded>
        Signup
    </CoolButton>
    </div>
  );
};

export default Signup;
