import React from 'react';
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../buttons/Buttons"
import 'bulma/css/bulma.css';

const Signup = (props) => {
    return (
        <div className='Signup'>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" /> 
            <CoolButton isSmall isDanger className="is-rounded my-class">SUBMIT</CoolButton>
        </div>
    )
}

export default Signup