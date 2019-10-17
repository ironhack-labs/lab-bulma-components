import React, { Component } from "react";
import "./App.css";
import Navbar from './Nav'
import FormField from './Form'
import Button from './Button'

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" input="text" placeholder="some name" />
                <FormField label="Email" input="text" placeholder="some email" />
                <FormField label="Password" input="password" placeholder="some password" />
                <Button type="button is-small is-success" name="Click here to submit" />
            </div>
        );
    }
}


export default Signup;