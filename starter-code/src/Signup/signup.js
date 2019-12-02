import React, { Component } from "react";
import NavBar from "../NavBar/navbar";
import FormField from "../FormField/formfield";
import CoolButton from "../CoolButton/coolbutton";

class Signup extends Component {



    render() {
        return (
            <div>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"></FormField>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></FormField>
            <FormField label="Password" type="password" placeholder="Secure password :)"></FormField>
            <CoolButton isSmall isSuccess>Signup</CoolButton>
            </div>
        );
    }
}

export default Signup;
