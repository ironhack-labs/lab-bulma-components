import React from 'react';
import FormField from "../formfield/FormField"
import CoolButton from "../buttons/Buttons"
import 'bulma/css/bulma.css';

const Signup = (props) => {
    return (
        <div className='Signup'>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" /> 
            <CoolButton className="button my-class is-small is-success" name="Signup"></CoolButton>
        </div>
    )
}

export default Signup