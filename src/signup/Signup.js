import React from 'react';
import NavBar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import './Signup.css'

const Signup = () => {
    return (
        <div>
            <NavBar />
            <form className="signup-form">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="Enter your password" />
                <CoolButton isPrimary isRounded type="submit">Sign Up</CoolButton>
            </form>
        </div>
    )
}

export default Signup;