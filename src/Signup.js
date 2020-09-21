import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import "bulma/css/bulma.css";

export default function Signup() {
    return (
    <div>
        <Navbar />
        <h2>Name</h2>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <h2>Email</h2>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <h2>Password</h2>
        <FormField label="Password" type="password" placeholder="min 8 characters" />
         <CoolButton isLight className=" my-class" type="submit" btnName="Signup" />
    </div>
    );
};
