import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import Coolbutton from '../coolbutton/Coolbutton';

export default function Signup() {
    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="test" placeholder="Password" />

            <Coolbutton />
        </div>
    )
}

