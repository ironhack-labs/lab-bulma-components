import React from 'react';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton.js'
import 'bulma/css/bulma.css';

class Signup extends React.Component {
    render() {
        return ( 
            <>
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label='Password' type='password' placeholder='6-12 characters; 1 number; 1 capital letter'/>
                <CoolButton className='button is-primary' text='Submit'/> 
            </>
        );
    };
};

export default Signup;