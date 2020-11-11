import React from "react";
import FormField from '../formfield/FormField';
import CoolButton from '../coolbuttom/CoolButtom';
import 'bulma/css/bulma.css';
import "./Signup.css";

function Signup(){

    return(
      <div className="signup">
        <form>
            <FormField label="Name" input="text" placeholder="Enter your name" />
            <FormField label="Email" input="email" placeholder="Enter your e-mail" />
            <FormField label="Password" input="password" placeholder="Enter your password" />
            <CoolButton isSmall isInfo>Register</CoolButton> 
        </form>
      </div>
    )
}

export default Signup;