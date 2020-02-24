import React from "react";
import Navbar from "./Navbar.js";
import Formfield from "./Formfield.js";
import CoolButton from "./CoolButton.js";

function Signup(){
    return (
        <section>
            <Navbar></Navbar>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Formfield label="Password" type="password" placeholder="Your password here" />
            <CoolButton className="button is-success">Submit</CoolButton>
        </section>
    )
}

export default Signup;
