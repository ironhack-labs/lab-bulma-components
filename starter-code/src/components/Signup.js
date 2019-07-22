import React from 'react';
import Header from './Header';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => {
  return (
    <div>
      <Header />
      <FormField label="Name" type="text" placeholder="Jon Snow"/>
      <FormField label="E-mail" type="email" placeholder="jon@winterfell.com"/>
      <FormField label="Senha" type="password" placeholder="******"/>
      <CoolButton>Submit</CoolButton>
    </div>
  )
}

export default Signup;