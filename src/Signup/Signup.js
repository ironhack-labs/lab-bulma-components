import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

export default function Signup() {
    return(
        <div>
          <FormField label="Name" type="name" placeholder="Insert your name" />
          <FormField label="E-mail" type="email" placeholder="Insert your e-mail" />
          <FormField label="Password" type="password" placeholder="Insert your password" />
          <CoolButton isPrimary>Signup</CoolButton>
        </div>
      )
}
