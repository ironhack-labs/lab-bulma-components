import React from 'react';
import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import Buttons from "../coolbutton/CoolButton"
import 'bulma/css/bulma.css';




function SignUp() {
    return (
        <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="Introduce your name"/>
        <FormField label="Email" type="email" placeholder="Introduce your email"/>
        <FormField label="Password" type="password" placeholder="Introduce your password"/>
        <Buttons label="Submit" type="Submit"/>
        </div>
    )
}



export default SignUp
