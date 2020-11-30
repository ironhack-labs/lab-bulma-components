import React from 'react';
import 'bulma/css/bulma.css';
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import NavBar from "./NavBar"

    const Signup = () => {
        return (
            <div className="signup">
                
                <NavBar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
                <FormField label="password" type="password" placeholder="password" />
                <CoolButton className="button is-small is-success" name = "Signup" />
            </div>
        )
    }

export default Signup