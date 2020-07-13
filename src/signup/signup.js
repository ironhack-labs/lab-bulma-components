
import React from 'react'

import 'bulma/css/bulma.css'
import './signup.css'

import NavBar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import NavBar from '../button/CoolButton'
import CoolButton from '../button/CoolButton'



const Signup = () => {

    return(
        <>
        <NavBar />
         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />  
        <FormField label="Password" type="password" placeholder="password" />  
        <CoolButton type= 'submit' className="button is-small is-success" name='Submit'/>                  
        </>


    )
}

export default Signup 