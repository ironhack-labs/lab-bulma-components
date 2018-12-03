import React, { Component } from "react";
import Nav from "../nav/nav.js"
import Form from "../form/form.js"
import CoolButton from "../coolbutton/coolButton";

class Signup extends Component {
    render() {
        return (
            <div className="Signup">
                <Nav></Nav>
                <Form label="Name" type="text" placeholder="e.g Alex Smith" />
                <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <Form label="Password" type="password" placeholder="Your Password" /> <br/>
                <CoolButton className="button is-success" name="Submit"></CoolButton>
            </div>
        );
    }
}

export default Signup;