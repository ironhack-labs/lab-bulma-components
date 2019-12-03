import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Container from './Container'

function SignUp() {
    return (
        <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="your password" />
            <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
            <CoolButton className="button is-small is-success">Button 2</CoolButton>
            <Container />
        </>
    )
}

export default SignUp 
