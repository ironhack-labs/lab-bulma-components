import React from "react";
import Navbar from '../components/Navbar.js'
import FormField from '../components/FormField.js'
import CoolButton from '../components/CoolButton.js'

function Signup() {
    return(
        <div>
            <Navbar />
            <FormField fieldName="Name" fieldType="text" fieldPlaceholder="e.g Alex Smith"/>
            <FormField fieldName="Email" fieldType="email" fieldPlaceholder="e.g asmith@email.com"/>
            <FormField fieldName="Password" fieldType="password" fieldPlaceholder=""/>
            <div className="buttons">
                <a><CoolButton buttonClass="button is-danger is-rounded my-class is-small" buttonText="Submit"></CoolButton></a>
            </div>
        </div>
    );
}

export default Signup
