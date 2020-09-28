import React from 'react';
import '../components/Signup.css';
import 'bulma/css/bulma.css';
import FormField from './FormField'
import CoolButton from './CoolButton'

function Signup() {

    return (
        <>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton className="button is-rounded my-class is-black buttonForm">
                Submit
            </CoolButton>
        </>
    )
}



export default Signup