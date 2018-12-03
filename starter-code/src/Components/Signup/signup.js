import React, { Component } from "react";
import "./signup.css";
import NavBar from "../navBar/navBar";
import FormField from "../FormField/formField";


class Signup extends Component {
    constructor() {
        super()
    }
    render() {

        return (
            <div>
                <NavBar></NavBar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        )
    }
}

export default Signup;