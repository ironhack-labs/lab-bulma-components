import React from 'react';
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../buttons/Buttons"
import 'bulma/css/bulma.css';

const Signup = (props) => {
    return (
        <div className='Signup'>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="Alex Smith" />
            <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" /> 
            <CoolButton class="button is-small is-success" type="submit" name="Sign up" />
        </div>
    )
}

export default Signup