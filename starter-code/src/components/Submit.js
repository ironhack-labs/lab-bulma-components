import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';



const Submit = () => {
    return (
        <nav className="container">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton className="button is-link" name="Submit" />
        </nav>

    );
}

export default Submit;