import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="Email" type="password" placeholder=""/>
      <CoolButton isSmall isSuccess> Signup</CoolButton>
    </div>
  )
}

export default Signup