import React from 'react';
import NavBar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../CoolButton/CoolButton'

function Signup(){
    return(
        <div>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton name="Submit" />
        </div>
    )
}

export default Signup



  

