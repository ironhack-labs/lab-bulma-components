import 'bulma/css/bulma.css';
import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

function Signup() {
    return (
        <>
            <Navbar />
            <form>
                <FormField label="Name" type="text" />
                <FormField label="Email" type="email"/>
                <FormField label="Password" type="password" />
                <CoolButton styles="is-primary is-outlined is-centered" btnContent="Submit" />
            </form>
        </>
    );
}

export default Signup;