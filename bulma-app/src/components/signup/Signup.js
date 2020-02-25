import React from "react"
import Navbar from "../navbar/navbar"
import FormField from "../FormField/FormField"
import CoolButton from "../CoolButton/CoolButton"


const Signup = props => {
    return (

        <form>

            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

            <CoolButton className="button is-rounded my-class is-danger is-small" name="Button 1"></CoolButton>
            <CoolButton className="button is-small is-success" name="Button 2"></CoolButton>

        </form>)
}

export default Signup