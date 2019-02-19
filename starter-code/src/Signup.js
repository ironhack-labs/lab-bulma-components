import React from 'react';
import Bulma from './Bulma.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

function Signup() {
  return (
      <form>
        <FormField label="name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="email" type="email" placeholder="e.g alexsmith@email.com" />
        <FormField label="password" type="text" placeholder="*******" />
        <CoolButton class='isSuccess' text='Signup' />
      </form>
  );
}

export default Signup;
