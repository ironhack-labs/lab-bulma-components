import React from 'react'
import 'bulma/css/bulma.css';

import FormField from "../FormField/FormField"
import Button from "../Button/Button"

import "./Signup.css"

const Signup = props => {

    return (

    <section className='field form'>
        <h1>Registrate</h1>
        <FormField  label ="Name"  type ="text"  placeholder ="eg Alex Smith"/>
        <FormField label="Email" type="email" placeholder="eg alexsmith@gmail.com"/>
        <FormField label="Password" type="password" placeholder="password"/>
        <Button name="Sign up"/>
    </section>
        
    )
}

export default Signup