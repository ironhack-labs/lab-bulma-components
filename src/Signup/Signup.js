import React from 'react'
import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../CoolButton/CoolButton.js'

export default function Signup() {
    return (
        <div>
        <Navbar />
        <form action="">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="email" placeholder="e.g alex@gmail.com"/>
            <FormField label="Password" type="password" placeholder="******"/>
            <CoolButton className="button is-primary">Signup</CoolButton>
        </form>
        </div>
    )
}
