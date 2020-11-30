import React from 'react';
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../button/CoolButton"
import 'bulma/css/bulma.css';

const Signup = () => {
    return (
        <div className='Signup'>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" /> 
            <CoolButton
                  className="button  is-success"
                  type="submit"
                  title="Submit"
                />            
        </div>
    )
}

export default Signup