import React from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/Formfield'
import CoolButton from '../coolbutton/CoolButton';

function Signup() {
    return (
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Filobotica Link"/>
            <FormField label="Email" type="email" placeholder="e.g filo@botica.com"/>
            <FormField label="Password" type="password" placeholder="********"/>
            <CoolButton isRounded isBlack isLarge>Submit</CoolButton>
        </div>
    )
}

export default Signup; 