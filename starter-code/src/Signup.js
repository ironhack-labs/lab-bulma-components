import React, { Component } from "react";
import FormField from './FormField'
import CoolButton from './CoolButton'

const Signup = (props) => {

    return (
        <div>
            <FormField name="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField name="Email" type="email" placeholder="alex@smith.com" />
            <FormField name="Password" type="password" placeholder="*************" />
            <CoolButton className="button is-rounded my-class is-danger is-small" buttontext="SUBMIT" />
            <CoolButton className="button is-small is-success" buttontext="Back" />
        </div >
    )
}


export default Signup;