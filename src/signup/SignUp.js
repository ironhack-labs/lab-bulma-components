import React from "react"
import NavBar from "../navbar/Navbar"
import CoolButton from "../coolbutton/CoolButton"
import FormField from "../formfield/FormField"

const SignUp = () => {  
return (
    <div>
    <NavBar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="Enter a Password"/>
    <CoolButton isSmall={'is-small'} isSuccess={'is-success'}>Submit</CoolButton>
    </div>
)
}



export default SignUp