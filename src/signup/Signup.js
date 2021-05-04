import React from 'react';
import FormField from './../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';


const Signup = () => {
    return (
            <div>
 
                <FormField label="Name" type="text" placeholder="Alex Smith" />
                <FormField label="Email" type="email" placeholder="alex@hotmail.com" />
                <FormField label="Password" type="password" placeholder="abc" />
                <CoolButton className="button is-small is-link">Submit</CoolButton>
            </div>
        )
    }


export default Signup;