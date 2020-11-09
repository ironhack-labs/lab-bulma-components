import React from 'react'
import Navbar from '../navbar/navbar.js'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

export const SigunUp = (props) => {
    
    return (
    <>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
         <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />   
         <FormField label="Password" type="password" placeholder="********" />   
         <CoolButton class="is-success is-small is-rounded" children="Sign up"/>
    </>
    )
}

export default SigunUp