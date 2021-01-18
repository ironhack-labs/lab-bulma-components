import React from "react";
import 'bulma/css/bulma.css';
import {Navbar} from "../navbar/Navbar";
import {FormField} from "../formfield/FormField";
import {CoolButton} from "../coolButton/CoolButton";

function Signup () {
   return (
    <div>
        <Navbar/>
        <div className="signup-bloc">
            <h1>Please, sign up here</h1>

            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label="Password" type="Password" placeholder="enter your password here"/>
            <CoolButton type="submit" name = "Submit" isSmall isSuccess></CoolButton>

      </div>
    </div>
   ); 
}


export default Signup;