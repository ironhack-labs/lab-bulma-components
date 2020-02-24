import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./Button";

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="form">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="Password" />
                    <CoolButton className="button is-danger is-rounded">Submit</CoolButton>
                </div>
            </div>
        );
    }
}

export default Signup;