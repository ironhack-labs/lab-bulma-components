import React from 'react'
import FormField from '../formfield/FormField.js'
import Coolbutton from '../coolButton/Coolbutton.js'
import Navbar from '../navbar/Navbar.js'

const Signup = props => {
    return (
        <div>
        <Navbar/>
            <form >
                <FormField label="Name" type="text" placeholder=" "/>
                <FormField label="Email" type="email" placeholder=" "/>
                <FormField label="Password" type="password" placeholder=" "/>
                <Coolbutton class="button is-dark" type="submit" text="Submit"/>
            </form>
        </div>
    )
}


export default Signup