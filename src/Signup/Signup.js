import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';

const Signup = () => {
    return(
        <>
            <Navbar />
            <form action="/signup" method="post">
                <FormField label="Name" type="text" placeholder="Your Name" />
                <FormField label="email" type="email" placeholder="youremail@gmail.com" />
                <FormField label="password" type="password" placeholder="" />
                <CoolButton classes="button is-small is-success" typeBtn="submit">Submit</CoolButton>
            </form>
        </>
    );
}

export default Signup;