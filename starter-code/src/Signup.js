import React, { Fragment } from 'react';
import Navigation from './Navigation';
import CoolButton from './CoolButton';
import FormField from './FormField'

const Signup = prop => {
    return (
        <Fragment>
            <Navigation />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@example.com" />
            <FormField label="Password" type="password" placeholder="Must have at least 8 characters" />
            <CoolButton className="is-normal is-primary">Signup</CoolButton>
        </Fragment>
    )
};

export default Signup;