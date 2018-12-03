import React from "react";
import "./Signup.css";
import "../Navbar/Navbar.js"
import Navbar from "../Navbar/Navbar";
import "../FormField/FormField.js"
import FormField from "../FormField/FormField";
import "../CoolButton/CoolButton.js"
import CoolButton from "../CoolButton/CoolButton";

class Signup extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)

        return (
            <div id="Signup" className="field">
                <Navbar></Navbar>
                <form action="#" method="post">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="password" />
                    <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
                </form>
            </div>
        )

    }
}

export default Signup;

