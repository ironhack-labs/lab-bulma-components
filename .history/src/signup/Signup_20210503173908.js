import React from "react";
import "./Signup.css";
import "bulma/css/bulma.css";
import FormField from "../formfield/FormField";

function Signup () {
    return (
        <div>
            <Navbar />
            <FormField labelTag="Name:" type="text" placeholder="e.g. Count Khimo" />
            <FormField labelTag="Email:" type="text" placeholder="e.g. count.khimo.vandash@"
        </div>
    )
}

export default Signup;