import React from 'react';
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/Formfield';
import Coolbutton from '../coolbutton/Coolbutton';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Formfield label="Password" type="password" />
            <Coolbutton isDark>Submit</Coolbutton>
        </div>
    );
}

export default Signup;