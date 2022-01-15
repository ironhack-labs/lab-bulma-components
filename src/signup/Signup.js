import NavBar from "../navbar/Navbar.js";
import FormField from "../formfield/Formfield.js";
import CoolButton from "../coolButton/CoolButton.js";

import "bulma/css/bulma.css"
import "./Signup.css"
import React from "react";

function Signup() {
    return (
        <div>
            <h1>Sign Up</h1>
            <NavBar />

            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Best a Passphrase." />

            <CoolButton className="button is-small is-success">Signup</CoolButton>
        </div>
    )
}
export default Signup