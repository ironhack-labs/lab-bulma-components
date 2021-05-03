import React from "react";
import "./Signup.css";
import "bulma/css/bulma.css";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

function Signup () {
    return (
        <div>
            <Navbar />
            <FormField labelTag="Name:" type="text" placeholder="e.g. Count Khimo" />
            <FormField labelTag="Email:" type="text" placeholder="e.g. count.khimo.vandash@test.es" />
            <FormField tabelTag="Password:" type="text" placeholder="*********" />
            <CoolButton buttonName="Submit" classes="button is-success is-small"
        </div>
    )
}

export default Signup;