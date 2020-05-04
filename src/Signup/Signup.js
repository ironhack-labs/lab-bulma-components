import React from 'react'
import './Signup.css'

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <>
            <Navbar />
            <section>
                <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
                <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
                <FormField label='Password' type='password' placeholder='e.g. gabylamejor' />
                <CoolButton isLight myButtonName='Submit' />
            </section>
        </>
    )
}

export default Signup;