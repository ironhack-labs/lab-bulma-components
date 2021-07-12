import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import FormField from '../formfield/Formfield'
import Navbar from '../navbar/Navbar'

function Signup(){
    return(
        <div>
            <Navbar/>
            <form> 
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton type="submit" isSmall isSuccess className="my-class">Submit</CoolButton>
            </form>
        </div>
    )
}

export default Signup