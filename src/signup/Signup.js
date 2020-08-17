import React from 'react'
import Navbar from './navbar/Navbar' // ! not forget a .
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'

import "bulma/css/bulma.css" // ! need to import the css file



function Signup (props){
    return (          

        <div>

            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g FirstName FamilyName" />
            <FormField label="Email" type="email" placeholder="e.g. youremail@domain.com" />
            <FormField label="Password" type="password" placeholder="type your password here" />
            <CoolButton isSmall isSuccess>Submit</CoolButton> 
  
        
        </div>
    )
        
}

export default Signup