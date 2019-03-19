import React from "react"

import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

function Signup (props) {
    return (
        <section className="singup">

            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="***************" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

        </section>
 
    )
}

export default Signup