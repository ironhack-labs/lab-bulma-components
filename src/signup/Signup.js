import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../CoolButton/CoolButton";

const Signup = () => {
    return (
    <div>
      <Navbar />

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
      <CoolButton
        isSmall
        isDanger
        className='is-rounded my-class'>Submit
        </CoolButton>      

    </div>
    );    
};

export default Signup;