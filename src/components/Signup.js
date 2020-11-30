import React from 'react';
import CoolButton from './CoolButton'
import Navbar from './Navbar'
import FormField from './FormField'
import 'bulma/css/bulma.css';

const Signup = props => { 

    return (
        <div className='Signup'>

            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" /> 
            <CoolButton class="button is-small is-success" name="Signup"/>
            </div>
    )
}

export default Signup
