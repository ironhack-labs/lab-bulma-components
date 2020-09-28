import React from 'react'
import 'bulma/css/bulma.css'
import FormField from "./FormField/FormField"
import CoolButton from "./Coolbutton/CoolButton"
import "./Signup.css"

const Signup = props => {
    return (
        <section className="form-container">
            <h2>Sign up</h2>
            <FormField label="Name" type="text" palceholder="e.g Alex Smith" />
            <FormField label="Email" type="email" palceholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="Password" palceholder="Insert your password" />
            <CoolButton isSmall isSuccess  name="Sign up!" />
        </section>
    )
}

export default Signup