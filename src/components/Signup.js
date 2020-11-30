import React from 'react';

import '../components/Signup.css';

import 'bulma/css/bulma.css';

import FormField from './FormField';

import CoolButton from './CoolButton';


const Signup = (props) => {
    return (
        <>
            <FormField label="Name" type="text" placeholder="Name" />
            <FormField label="Email" type="email" placeholder="Email@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton className="button is-rounded my-class is-black buttonForm">
                Submit
            </CoolButton>
        </>

    );
}

export default Signup
