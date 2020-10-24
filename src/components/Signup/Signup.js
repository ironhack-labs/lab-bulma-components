import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

const Signup = () => {
    return (
        <div>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. Alex123456" />
            <CoolButton isActive isPrimary type="submit">Register</CoolButton>
        </div>
    )
}

export default Signup;