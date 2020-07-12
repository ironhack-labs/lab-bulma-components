import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';

const Signup = () => {
  return (
    <div>
        <Navbar />
        <div className="columns">
        <div className="column">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="***" />
        </div>
        <div className="column"></div>  
      </div>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton> 
    </div>
  );
};

export default Signup;
