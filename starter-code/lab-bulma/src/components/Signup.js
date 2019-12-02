import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function Signup(props) {
    return (
        <>
           <Navbar/> 
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />
            <FormField
                label="Passport"
                type="passport"
                placeholder="Enter a passport"
            />
            <CoolButton className="button is-rounded my-class is-info is-small" isSmall="" text="Submit"></CoolButton>
        </>
    );
}

export default Signup;