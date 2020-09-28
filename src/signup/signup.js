import React from 'react'
import 'bulma/css/bulma.css'
import NavBar from '../navBar/navBar.js'
import FormField from '../formfield/formfield.js'
import CoolButton from '../CoolButton/CoolButton.js'

const Signup = () => {
    return (
        <div>
            <NavBar />
            <section>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*****************"/>
                <CoolButton className="button is-rounded my-class buttonForm">submit</CoolButton>
            </section>
        </div>
    )
}
export default Signup

