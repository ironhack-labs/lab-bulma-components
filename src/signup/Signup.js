import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../button/CoolButton.js'

export const Signup = () => {
    return (
        <div>
        <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="*******" />
          <CoolButton></CoolButton>
          </div>
    );
}

export default Signup;