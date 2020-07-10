import React from 'react'
import FormField from '../formfield/FormField'
import Coolbutton from '../coolButton/Coolbutton'

const Signup = props => {
    return (
        <div>
            <form action={props.action} method={props.method}>
                <FormField label="Name" type="text" placeholder="e.g Carlitos Balá"/>
                <FormField label="Name" type="email" placeholder="e.g carlitos@hola.com"/>
                <FormField label="Name" type="password" placeholder="***********"/>
                <Coolbutton clasesDelBoton="button is-primary" type="submit" text="Enviar"/>
            </form>
        </div>
    )
}


export default Signup
