import React from 'react';
import CoolButton from '../buttons/CoolButton';
import FormField from '../formfield/FormField';

export default function Signup() {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isSuccess>
        Sign Up
      </CoolButton>
    </div>
  );
}
