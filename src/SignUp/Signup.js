import React from 'react';
import 'bulma/css/bulma.css';
import FormField from './../formfield/FormField.js'
import Nav from './../navbar/navbar.js'
import Button from './../CoolButton/CoolButton.js';

const Signup = props => {

    return (
        <>
            <Nav />
            <FormField label="Name" placeholder="e.g Alex Smith" />
            <FormField label="Email" placeholder="e.g alexsmith@gmail.com" />
            <FormField label="Password" placeholder="password" />
            <Button class="button is-success" name="Sign up" />
        </>
    )
}

export default Signup