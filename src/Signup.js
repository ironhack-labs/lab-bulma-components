import React from 'react'
// import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../buttons/Buttons"
import 'bulma/css/bulma.css';

export default function Signup(props) {
    return (
        <div>
            <FormField
                label="Name"
                type="text"
                placeholder="e.g Alex Smith"
            />

              
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />

            <FormField
                label="Password"
                type="Password"
                placeholder="*********"
            />

            <CoolButton
                label="signup"
                nameForRed="Signup"
                urlforRed= '/signup'
                classNameForRed="button is-small is-success"
            />                  

        </div>
    )
}
