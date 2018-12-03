import React from "react"
import FormField from "./components/FormField.js";

export default class SignUp extends React.Component {
     render() {
        return (
            <form className="formLogin">
                <FormFieldElement label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormFieldElement label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormFieldElement label="contraseña" type="text" placeholder="*****" />
                <CoolButton className = "button is-light">Log in</CoolButton> 
            </form>
        )
     }
 }