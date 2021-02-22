import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
        <>
            {/* <Navbar /> */}
            <FormField label="Name" type="text" placeholder="Your Name" />
            <FormField label="email" type="email" placeholder="Enter your email here" />
            <FormField label="password" type="password" placeholder="Your password" />
            <CoolButton typeButton="button is-success is-rounded is-focused" text="submit">Submit</CoolButton>
        </>
    )
}

export default Signup 
