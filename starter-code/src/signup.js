import React, { Component } from "react";
import NavBar from "./Navbar.js"
import FormField from "./Formfield.js";
import Button from "./button.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <NavBar />
                    <FormField label="Name" type="text" placeholder='eg Kevin Rabesaotra' />
                    <FormField label="Email" type="email" placeholder='eg kevin.rabesaotra@gmail.com' />
                    <FormField label="Password" type="password" placeholder='eg ****' />
                    <CoolButton isSmall isSuccess value="Submit" />
                </form>
            </div>

        )
    }
}


export default Signup;