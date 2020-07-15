import React from 'react'
import FormField from '../formfield/FormField.js'
import Coolbutton from '../coolButton/Coolbutton.js'

const Signup = props => {
    return (
        <div>
            <form action={props.action} method={props.method}>
                <FormField label="Name" type="text" placeholder=" "/>
                <FormField label="Name" type="email" placeholder=" "/>
                <FormField label="Name" type="password" placeholder=" "/>
                <Coolbutton class="button is-dark" type="submit" text="Submit"/>
            </form>
        </div>
    )
}


export default Signup