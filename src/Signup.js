import React from 'react';
import Navbar from "./Navbar/Navbar"
import FormField from "./formfield/Formfield"
import CoolButton from "./CoolButton/CoolButton"

const Signup = () => {
  return  <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div> 

};

export default Signup;
