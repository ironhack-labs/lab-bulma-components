import React from 'react'

import 'bulma/css/bulma.css'
import '../signup/Signup.css'
import Navbar from './../navbar/Navbar'
import Formfield from './../formfield/FormField'
import CoolButton from './../coolbutton/CoolButton'


const Signup = props =>{

    return (
    <>
    <Navbar />
    <div className="container paddingInit">
        <Formfield label="Name" type="text" placeholder="Cynthia Elizabeth" /> 
        <Formfield label="Email" type="email" placeholder="cylabeth@gmail.com" /> 
        <Formfield label="Password" type="password" placeholder="**********" /> 
        <CoolButton buttonNameOne="Login" />
    </div>
    </>    
    )

}

export default Signup
