import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";

export default class Signup extends Component {
    render() {
        return (
            <div >
        
        <div className="singup">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton> */}
        </div>
            </div>
        )
    }
}
