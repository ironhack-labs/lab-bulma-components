import React from 'react'
import Nav from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'


const Signup = props => {
    return (
        <>
            <Nav />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="**********" />
            <CoolButton class="button is-small is-dark" name="Sign up" />
        </>)
}

export default Signup