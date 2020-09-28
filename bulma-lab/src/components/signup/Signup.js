import React from 'react'

// Custom components
import TransparentNavbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    
    return (
        <>
            <TransparentNavbar />
            <FormField label="Name" text="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton isSuccess>Send</CoolButton>  
        </>
    )

}

export default Signup