
import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import Formfield from '../formfield/Formfield';
import CoolButton from '../CoolButton/CoolButton';

function Signup() {
    return <div>
        <Navbar />
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Formfield label="Password" type="password" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
    </div>
}

export default Signup;