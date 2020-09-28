import React from "react"
import 'bulma/css/bulma.css'
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/Formfield'

const Signup = () => {

    return (
        <>
            
            <Navbar/><br/><br/>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Formfield label="Password" type="password" placeholder="*******" />

        </>
    )
}

export default Signup