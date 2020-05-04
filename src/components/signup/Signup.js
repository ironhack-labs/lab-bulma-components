import React from 'react'
import 'bulma/css/bulma.css'

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <>
            <Navbar />
            <form action='/' method='POST'>
                <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="Choose a good one" />
                <CoolButton isSuccess type="submit" >Sign Up</CoolButton>
            </form>
        </>
    )
}

export default Signup