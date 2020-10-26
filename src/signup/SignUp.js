import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import FormField from '../formfield/FormField'
import Navbar from '../navbar/Navbar'

export default function SignUp() {
    return (
        <div>
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="Enter your name"/>
                <FormField label="Email" type="email" placeholder="Enter your email"/>
                <FormField label="Password" type="password" placeholder="Enter your password"/>
                <CoolButton text="Submit" type="submit" isRounded isSuccess/>
            </form>
        </div>
    )
}
