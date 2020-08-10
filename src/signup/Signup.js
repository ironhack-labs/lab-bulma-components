import React from 'react';
import 'bulma/css/bulma.css';
import Formfield from '../formfield/Formfield';
import Navbar from '../navbar/Navbar';
import CoolButton from '../Button/CoolButton';

function Signup() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='container'>
                <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
                <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <Formfield label="Password" type="password" placeholder="******" />
                <CoolButton isSmall isSuccess type='Submit' children='Submit' />

            </div>
        </div>

    )
}

export default Signup;
