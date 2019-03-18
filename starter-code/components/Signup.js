import React from "react"
import Navbar from "../components/Navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"

function Signup () {
    return (
        <section className="signup">
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*********" />
            <CoolButton isPrimary isRounded>Submit</CoolButton>
        </section>
    )
}

export default Signup