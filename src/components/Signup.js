import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formField/formField.js'
import Coolbutton from './CoolButton.js';

const Signup = () => {
    return(
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="Firstname Lastname"/>
            <FormField label="Email" type="email" placeholder="name@email.com"/>
            <FormField label="Password" type="password" placeholder="password"/>
            <Coolbutton className="button is-small is-succes" submit="Submit"/>  
        </div>
    )
}

export default Signup;