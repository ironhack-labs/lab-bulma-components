import React from "react";
import NavBar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../coolbutton/CoolButton.js'


function Signup(){
    return(
        <div>
            <NavBar />
            <form method="POST">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton isPrimary>Sign Up</CoolButton>
            </form>
        </div>
    )

}




export default Signup;