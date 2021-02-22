import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import './Signup.css'

const Signup = () => {
    return (
        <>
            {/* <Navbar /> */}
            <FormField label="Name" type="text" placeholder="Your Name" />
            <FormField label="Email" type="email" placeholder="Enter your email here" />
            <FormField label="Password" type="password" placeholder="Your password" />
            <CoolButton div className='submit' typeButton="button is-success is-rounded is-focused" text="Submit">Submit</CoolButton>
        </>
    )
}

export default Signup 
