import React from 'react';
import FormField from "../formfield/FormField"
import CoolButton from "../CoolButton/CoolButton"
import NavBar from "../navbar/Navbar";
// import 'bulma/css/bulma.css';

const SignUp = () => {
    return (
        <div>
            <NavBar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label="Password" type="password" placeholder="Please, introduce your password."/>
            <CoolButton isSmall isPrimary buttonValue="Submit Form"/>
        </div>
    );
};

export default SignUp;
