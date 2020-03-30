import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <div>
         <Navbar />
         <form action="">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. ********" />
            <CoolButton isSmall isSuccess>Sign up</CoolButton>
        </form>   
        </div>
    )
}

export default Signup
