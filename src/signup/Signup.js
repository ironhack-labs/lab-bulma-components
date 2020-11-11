import React from "react";
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbuttom/CoolButtom';
import 'bulma/css/bulma.css';
import "./Signup.css";

function Signup(){

    return(
    <div>
      <Navbar />
      <div className="signup">
        <form>
            <FormField labelName="Name" inputType="text" placeHolder="Enter your name" />
            <FormField labelName="Email" inputType="email" placeHolder="Enter your e-mail" />
            <FormField labelName="Password" inputType="password" placeHolder="Enter your password" />
            <CoolButton isSmall isInfo>Register</CoolButton> 
        </form>
      </div>
   </div>

        
    )
}

export default Signup;