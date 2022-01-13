import React from 'react';
import { Navbar } from './navbar/Navbar.js';
import { FormField } from './FormField/FormField';
import { CoolButton } from './CoolBottom/CoolButton'
import 'bulma/css/bulma.css';

export const Signup = () => {
    return (
        <>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      <FormField label="Password" type="password" placeholder="********" /> 
      <CoolButton text="Submit" isDanger isSmall />
        </>
    )
}