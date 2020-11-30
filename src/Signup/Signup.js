import React from 'react';
import Navbar from "../navbar/Navbar.js"
import CoolButton from "../CoolButton/CoolButton.js"
import FormField from "../FormField/FormField.js"
import 'bulma/css/bulma.css';

const Signup = (props) => {
    return (

        <div className='Signup'>
     
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" /> 

            <CoolButton />
        </div>
    )
}

export default Signup; 