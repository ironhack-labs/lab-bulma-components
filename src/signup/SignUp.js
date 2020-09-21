import React, { Fragment } from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

export default function SignUp() {
    return (
        <Fragment>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Please don't share your password" />
            <CoolButton className="button is-primary is-centered">Sign Up</CoolButton>

        </Fragment>
    )
}
