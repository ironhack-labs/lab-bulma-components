import React from 'react'

import CoolButton from '../button/button'
import FormField from '../formfield/formfield'

import 'bulma/css/bulma.css'

const Signup = props => {

    return (

        <main>

            <FormField label = "Name" type = "text" placeholder = "e.g Alex Smith"/>
            <FormField label = "Email" type = "email" placeholder = "e.g alexsmith@gmail.com"/>
            <FormField label = "Password" type = "password" placeholder = "Password"/>
            <CoolButton class="button is-small is-success" name= "SignUp"/>
    
        </main>
    )
}

export default Signup