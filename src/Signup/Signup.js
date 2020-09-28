import React from 'react'

import 'bulma/css/bulma.css'

import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../CoolButton/CoolButton';


const Signup = props => {

    return (
        <>
            <Navbar />

            <FormField label="Name" type="text" placeholder="write your name" />
            <FormField label="Email" type="email" placeholder="write your email" />
            <FormField label="Password" type="password" placeholder="write your password" />

            <CoolButton name="Submit" className="button is-danger is-rounded"></CoolButton>

        </>
    )

}

export default Signup