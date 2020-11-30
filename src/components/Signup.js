import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import 'bulma/css/bulma.css';

const Signup = props => {
    return (
        <>
            <Navbar />
            <FormField
        label="Name"
        type="text"
        placeholder="e.g Alex Smith" />
             <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com" />
            <FormField
            label="Password"
            type="password"
                placeholder="****" />
            <CoolButton className="button is-small is-success" text='Submit'/>
            
            
        </>
          );
};
export default Signup
