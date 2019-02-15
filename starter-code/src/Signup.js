import React, { Component } from "react";

import Navbar from "./Navbar.js"
import FormField from "./Formfield.js"
import CoolButton from "./CoolButton"
import "./Signup.css";


class Signup extends Component {

    render() {
        return (
        <div className="signup">
        <Navbar/>
        <div className="signupcontainer">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="text" placeholder="e.g. password123" />
        
        <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
        </div>
        </div>
        )
    }
}

export default Signup;
