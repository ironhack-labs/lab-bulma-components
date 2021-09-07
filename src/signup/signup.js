import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import FormField from '../formfield/FormField'
import Navbar from '../navbar/Navbar'

export default function Signup() {
    return (
        <div>
            <Navbar></Navbar>
            <FormField name="name" placeholder="e.g Alex Smith"></FormField>
            <FormField name="email" placeholder="e.g. alexsmith@gmail.com"></FormField>
            <FormField name="password" placeholder="Password" type="password"></FormField>
            <br></br>
            <CoolButton isSmall isSuccess text="Signup"></CoolButton>
        </div>
    )
}
