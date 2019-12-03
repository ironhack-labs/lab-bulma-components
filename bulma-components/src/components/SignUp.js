import React from 'react'
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

const SignUp = (props) =>{
    return (
        <>
        <Navbar />
        <FormField label ="Name" type = "text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
            <FormField label="Passport" type="passport" placeholder="enter passport" />
            <CoolButton className="button is-small is-success" text="Submit" />
        </>
    )
}

export default SignUp