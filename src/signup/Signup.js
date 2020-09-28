import React from 'react'
import 'bulma/css/bulma.css'
import './Signup.css'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <>
        <Navbar />
        <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
        <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField label='Password' type='password' placeholder='********' />
        <CoolButton type='submit' isBlack>Submit</CoolButton>
        </>
    )
}







export default Signup