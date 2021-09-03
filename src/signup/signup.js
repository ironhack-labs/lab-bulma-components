import React from "react";
import "bulma/css/bulma.css";
import "./signup.css";

import Navbar from "../navbar/navbar";
import FormField from "../formField/formField";
import CoolButton from "../coolButton/coolButton";

const Signup = () => (
    <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g XXX Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <FormField label="Password" type="password" placeholder="********"/>
    
        <div className="sign">
             <CoolButton className="is-primary">
                <strong>Log in</strong>
            </CoolButton>
        </div>
    </div>
);

export default Signup;