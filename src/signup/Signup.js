import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';

export const Signup=(props)=>{
    return(
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" /> 
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
    <FormField label="Password" type="password" placeholder="******" /> 
    <CoolButton className="button is-success">Submit Form</CoolButton> 
        </div>
        
    )}

export default Signup