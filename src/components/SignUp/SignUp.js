import React from 'react';
import Navbar from './../NavBar/Navbar';
import FormField from './../FormField/FormField';
import 'bulma/css/bulma.css';

// Iteration 4
const SignUp = () => {
    return (
        <div>
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g alex@gmail.com" />
                <FormField label="Password" type="password" placeholder="Enter password" />
            </form>
        </div>
    )
}

export default SignUp