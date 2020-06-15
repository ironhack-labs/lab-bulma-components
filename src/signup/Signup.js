import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolButton/CoolButton'

function Signup() {
    return (

        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g Alex@Smith.com" />
            <FormField label="Password" type="password" placeholder="" />
            <CoolButton isSmall isDanger>Submit</CoolButton>
        </div>

    );
}

export default Signup;