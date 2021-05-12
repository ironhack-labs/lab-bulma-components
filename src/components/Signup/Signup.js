import React from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import Formfield from '../Formfield/Formfield';
import CoolButton from '../CoolButton/CoolButton'

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <Formfield label="Email" type="password" placeholder="Type your password"/>
    
            <CoolButton isActive isLarge isPrimary isRouded>Signup</CoolButton>
        </div>
    )
};

export default Signup;