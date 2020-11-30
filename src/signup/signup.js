import React from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../button/CoolButton';
const SignUp = () => {
    return (
        <React.Fragment>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g Alex Smith" />
        <CoolButton className = "is-primary">Sign Up</CoolButton>
        </React.Fragment>
    )
}
export default SignUp;