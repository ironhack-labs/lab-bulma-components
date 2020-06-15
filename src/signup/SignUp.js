import React from 'react'
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/Formfield'
import CoolButton from '../coolbutton/CoolButton'

const SignUp = () => {
    return (
        <div>
            <Navbar/>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Formfield label="Password" type="password" placeholder="" />
            <CoolButton>Submit form</CoolButton>
        </div>
    )
}


export default SignUp