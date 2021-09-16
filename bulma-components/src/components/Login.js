import React from 'react';
import CoolButton from '../buttons/CoolButton';
import FormField from '../formfield/FormField';

export default function Login() {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Login
      </CoolButton>
    </div>
  );
}
