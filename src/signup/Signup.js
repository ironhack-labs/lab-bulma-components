import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import 'bulma/css/bulma.css';
import './Signup.css';

const Signup = () => {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton isPrimary>Submit</CoolButton>
        </>
    );
};
  
export default Signup;