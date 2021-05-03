import React from 'react';
import 'bulma/css/bulma.css';
import './Signup.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <FormField label="Name" type="text" placeholder="Sarah" />
                <FormField label="Email" type="email" placeholder="sarahc@email.com" />
                <FormField label="Password" type="password" placeholder="********" />
                <CoolButton isSuccess className="is-rounded">Login</CoolButton>
            </div>
        </div>
    )
}

export default Signup;