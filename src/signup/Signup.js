// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form

import React from 'react';

import './Signup.css';
import 'bulma/css/bulma.css';
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbtn/CoolButton";

const Signup = (props) => {
    return (
        <section className="signUp">
            <Navbar />

            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="text" placeholder="e.g Alex@Smith" />

            <CoolButton style="button is-primary">Submit</CoolButton>
        </section>
    )
};

export default Signup;