import React from 'react'
import 'bulma/css/bulma.css'

import FormField from './FormField'
import CoolButton from './CoolButton'


const Signup = props => {
    return (
    <section> 
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton className="button is-small is-success" name="Signup"/>
        </section>
    )
}


export default Signup