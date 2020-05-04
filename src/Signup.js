import React from 'react';
import "./Signup.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js"
import CoolButton from "./CoolButton/CoolButton.js"

const Signup = () => {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. password" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Sign up</CoolButton>
        </>
    )
};

export default Signup;
