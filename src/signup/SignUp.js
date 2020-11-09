import 'bulma/css/bulma.css';
import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const SignUp = props => {
    return (
        <div>
            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton></CoolButton>
        </div>
    )
}

export default SignUp;