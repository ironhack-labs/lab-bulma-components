import React from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/Formfield'
import CoolButton from '../coolbutton/CoolButton';

function Signup() {
    return (
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Ezzio Auditore"/>
            <FormField label="Email" type="email" placeholder="e.g ezzioaudi@gmail.com"/>
            <FormField label="Password" type="password" placeholder="********"/>
            <CoolButton isRounded isBlack isLarge>Submit</CoolButton>
        </div>
    )
}

export default Signup;