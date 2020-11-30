import React from 'react';
import NavBar from '../navbar/NavBar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';

export default function SignUp() {
    return (
        <React.Fragment>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton className="button is-info" name="Submit" />
        </React.Fragment>
    )
}
