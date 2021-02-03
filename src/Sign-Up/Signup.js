import React from "react";
import Navbar from "../Navbar/Navbar"
import CoolButton from "../CoolButton/CoolButton"
import FormField from "../FormField/Formfield"

function SignUp(){
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="pass1234" />
            <CoolButton className="btn-success">Sign-up</CoolButton>


        </div>
    </div>
}

export default SignUp