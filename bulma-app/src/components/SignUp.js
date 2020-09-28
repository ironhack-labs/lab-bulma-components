import React from 'react'

import 'bulma/css/bulma.css'
import './SignUp.css'

import NavBar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Container from './Container'

const SignUp = () => {
    return (
        <>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. password" />
            <div class='center'>

                <CoolButton text='Enviar' type='submit' />
            </div>
            <Container />
        </>
    )
}

export default SignUp