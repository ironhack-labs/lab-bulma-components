import React from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

export default function SignUp() {
    return (
        <div>  
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Fill in your password" />
            <CoolButton isSuccess isRounded isLarge className="is-rounded my-class">Button 1</CoolButton>
        </div>
    )
}
