import React from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton.js';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*******" />
                <CoolButton isDanger isRounded>Submit</CoolButton>
            </form>
        </div>
    )
}

export default Signup;