import React from 'react'
import FormField from '../formfield/FormField.js'
import Navbar from '../navbar/Navbar.js'

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <div className="columns">
                <div className="column">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="***" />
                </div>
            <div className="column"></div>  
        </div>
    );
};

