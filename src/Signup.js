import React from 'react'
import Navbar from "./Navbar"
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
//import CoolButton from './coolbutton/CoolButton'

function Signup() {
    return (
        <div>
            <Navbar/>
            <form>
            <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>
        
            <FormField label="Email" type="email" placeholder="e.g.  alexsmith@gmail.com"/>
            <FormField label="Password" type="password" placeholder="******"/>
            <CoolButton isPrimary type="submit">Submit</CoolButton>
      </form>
        </div>
       
    )
}

export default Signup
