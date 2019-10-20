import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

const Signup = () => {
  return (
    <div>
      <Navbar buttonName1="Login" buttonClasses1={['is-info']} buttonName2="Sign up" buttonClasses2={['is-primary']} />
      <FormField label="Name" type="text" placeholder="e.g Monkey D. Luffy" />
      <FormField label="Email" type="email" placeholder="e.g monkey.d.luffy@gmail.com" />
      <CoolButton name="Sign up!" styles={['is-info']} />
    </div>
  );
};

export default Signup;
