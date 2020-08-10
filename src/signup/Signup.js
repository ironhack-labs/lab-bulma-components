import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "../navbar/Navbar";
import FormField from '../formfield/FormField';
import CoolButton from '../button/CoolButton';
import "./Signup.css";

export const Signup = () => {
    return (
        <div>
            
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Log in</CoolButton>
            <CoolButton isSmall isSuccess>Sign up</CoolButton>
        </div>
    )
}


export default Signup;