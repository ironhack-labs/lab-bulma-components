import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import FormField from '../formfield/FormField'
import Navbar from '../navbar/Navbar'

export default function SignUp() {
    return (
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password"/>
            <CoolButton className="button is-primary"  type="submit"  title="Submit" />    
        </div>
    )
}
