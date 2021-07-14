import CoolButton from "../button/CoolButton";
import React from "react";
import FormField from "../formfield/FormField";
import Navbar from "../navbar/Navbar";

const Signup =()=>{
    return (
        <>
        <Navbar/>
        <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <CoolButton isDanger className="is-rounded">Submit</CoolButton>
        </form>
        </>
    )
}

export default Signup;