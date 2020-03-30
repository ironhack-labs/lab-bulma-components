import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton.js';
import 'bulma/css/bulma.css';

const Signup = () => {
  return(
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="******" />
      <CoolButton classes={["isSmall", "isSuccess"]} name="Signup!"></CoolButton>
    </div>
  )
};

export default Signup;